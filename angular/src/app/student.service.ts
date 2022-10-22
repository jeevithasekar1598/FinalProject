import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { Student } from './common/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private stuURL="http://localhost:8080/api/stu";
  constructor(private httpClient:HttpClient) 
  { 
    
  }
  getAllStudents():Observable<Student[]>
  {
    return this.httpClient.get<getStudentResponse>(this.stuURL).pipe(map(response=>response._embedded.students))
  }
  SaveStudent(student:Student):Observable<Student>
  {
    const httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'auth-token',
        'Access-control-Allow-Origin':'*'
      })
    };
  return this.httpClient.post<Student>(this.stuURL,student,httpOptions);
    
  }
  getStudentById(stuId:number):Observable<Student>
   {
    const stuIDURl=this.stuURL+"/"+stuId;
   return this.httpClient.get<Student>(stuIDURl);
   }
   updateStudent(student:Student):Observable<Student>{
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.httpClient.put<Student>(this.stuURL+`/${student.id}`,student,httpOptions);
  }
  deleteStudent(id: Number) {
   
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.httpClient.delete<Student>(this.stuURL+`/${id}`,httpOptions);
  }
  getAllStudentsSearchBySname(sname : string) : Observable<Student[]> {
    const searchURL = "http://localhost:8080/api/stu/search/findBySnameIgnoreCase?sname=" + sname;

    return this.httpClient.get<GetSearchBySname>(searchURL).pipe(map(response => response._embedded.students));
  }

}
interface getStudentResponse
{
  _embedded:
  {
    students:Student[]
  }
  
}
interface GetSearchBySname{
  _embedded : {
    students : Student[]
  }
}

 
