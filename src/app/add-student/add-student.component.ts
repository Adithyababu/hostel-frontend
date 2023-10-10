import { Component ,OnInit} from '@angular/core';
import { StudentSchema } from 'src/models/studentSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{
 
  constructor(private api:ApiService,private addstudentRouter:Router,private toaster:ToasterService){
    this.student.departmentId="Department"
  }
   student:StudentSchema={}
   alldepartment:any=[]

   ngOnInit(): void {
     this.api.getAllDepartments().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.alldepartment=res
      },
      
        error:(err:any)=>{
          console.log(err.message);
          
          }
        })
   }
   addNewStudent(student:StudentSchema){
    //call api in service
    this.api.addNewStudent(student).subscribe({
      next:(res:any)=>{
        //data added into server
        console.log(res);
        this.toaster.showSuccess("New student succesfully registerd",'success')
        setTimeout(()=>{
          this.addstudentRouter.navigateByUrl('all-students')

        },3000)
      },
      error:(err:any)=>{
        console.log(err.message);
        this.toaster.showWarning("New Admission failed",'fail')
      }
    })
   }
}
