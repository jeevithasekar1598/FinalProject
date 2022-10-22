import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/common/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-stu-list',
  templateUrl: './stu-list.component.html',
  styleUrls: ['./stu-list.component.css']
})
export class StuListComponent implements OnInit
 {
  students:Student[]
  hasSearchName: any;
  searchName: string;
  constructor(private stuService:StudentService,public activateRoute: ActivatedRoute,public router: Router) 
  {

   }

  ngOnInit(): void 
  {
    this.activateRoute.paramMap.subscribe(()=>this.getAllStudent());
  }
  getAllStudent():void
  {
    this.hasSearchName = this.activateRoute.snapshot.paramMap.has("sname");
    if(this.hasSearchName)
    {
      this.searchName  = this.activateRoute.snapshot.paramMap.get("sname");
      console.log(this.searchName)
    this.stuService.getAllStudentsSearchBySname(this.searchName).subscribe(data=>{
      console.log(data);
      this.students= data;
    });

    }
    else{

   
    this.stuService.getAllStudents().subscribe(data=>{
      console.log(data);
      this.students=data;
    });
  } }

  updateStu(id : Number){
    this.router.navigateByUrl("/updateStu/" +id);
  }
  addStu():void
  {
    this.router.navigateByUrl("/stuform");
  }
  deleteStu(id : Number){
    console.log(id);
    if(confirm("Do you want to delete ?")){
      this.stuService.deleteStudent(id).subscribe(data=>{
        console.log(data);
        this.getAllStudent();
      })
    };
  
    
  }
  



}
