import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { StudentSchema } from 'src/models/studentSchema';
import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-edit-student-details',
  templateUrl: './edit-student-details.component.html',
  styleUrls: ['./edit-student-details.component.css']
})
export class EditStudentDetailsComponent implements OnInit{
  student:StudentSchema={}
  departments:any=[]
  constructor(private editRoute:ActivatedRoute,private toaster:ToasterService ,private api:ApiService,private editrouter:Router){}
  ngOnInit(): void {
    this.editRoute.params.subscribe({
      next:(pathparameter:any)=>{
        const {id}=pathparameter
        console.log(id);
        this.api.viewStudent(id).subscribe({
          next:(res:any)=>{
            console.log(res);
            this.student=res
          }
        })
      }
    })

    //get all departments
    this.api.getAllDepartments().subscribe({
      next:(res:any)=>{
        this.departments=res
        console.log(this.departments);
      }
    })
  }
  editStudent(id:any){
    this.api.editStudent(id,this.student).subscribe({
      next:(res:any)=>{
        console.log(res);   
        this.toaster.showSuccess("succesfully updated",'success')
        setTimeout(()=>{
          this.editrouter.navigateByUrl('all-students') 

        },3000)
      },
      error:(err:any)=>{
        console.log(err);
        this.toaster.showWarning("failed",'fail')
      }
    })
  }
}
