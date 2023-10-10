import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  throwError } from 'rxjs';
import { StudentSchema } from 'src/models/studentSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   base_Url='https://hostel-management-server-qgoj.onrender.com'
  constructor( private http:HttpClient) { }

//handle error
handleError(error:HttpErrorResponse)  {
  let errorMsg:string=''
  if(error.error){
    errorMsg=`Error:${error.message}`
  }
  else{
    errorMsg=`Status:${error.status} \n Error: ${error.message}`
  }
  return throwError(()=>errorMsg)
}

//get all student details
  getAllStudents()
  {
  return this.http.get(`${this.base_Url}/students`)
  }

//  view student details

viewStudent(id:any)
{
  return this.http.get(`${this.base_Url}/students/${id}`)
}

//get department name
getDepartment(id:any){
  return this.http.get(`${this.base_Url}/departments/${id}`)

}

//get all departments
getAllDepartments(){
  //api call
  return this.http.get(`${this.base_Url}/departments`)
}

//add new student
addNewStudent(student:StudentSchema){
  //api call

   return this.http.post(`${this.base_Url}/students`,student)
}
//delete a student
deleteStudent(id:any){
   return this.http.delete(`${this.base_Url}/students/${id}`)
}
// edit  student details
editStudent(id:any,student:StudentSchema){
  return this.http.put(`${this.base_Url}/students/${id}`,student)
}
}
