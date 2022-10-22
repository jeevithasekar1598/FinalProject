import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/common/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-stu-form',
  templateUrl: './stu-form.component.html',
  styleUrls: ['./stu-form.component.css']
})
export class StuFormComponent implements OnInit {
students:Student=new Student(0,"Kaviya","","Ooty","","",new Date(),0,0,"");
  isEditable: boolean;
  constructor(public stuService:StudentService,public router:Router,public activateRoute :ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.activateRoute.paramMap.subscribe(()=>this.students);
    this.getStudentById();
  }
  onSubmit():void
  {
    if(this.isEditable)
    {
      this.stuService.updateStudent(this.students).subscribe(data=>

        this.router.navigateByUrl("/student"));

    }
    else{
      console.log("hello");
    console.log(this.students);
    this.stuService.SaveStudent(this.students).
    subscribe(data=>console.log(data));
    this.router.navigateByUrl("/student");
    }

  }

  getStudentById(){
    const stuID  = parseFloat(this.activateRoute.snapshot.paramMap.get("id"));
    
  console.log(stuID)
  if(stuID> 0){
    this.isEditable = true;
    this.stuService.getStudentById(stuID).subscribe(data=>{
      this.students = data;
      console.log(this.students)
    });
  }


  }
}

