import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit{
    viewstudent:any={}
    errorMsg:string=''
    department:string=''

  constructor(private api:ApiService,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.params.subscribe((data:any)=>{
      //destructuring data object
      const {id}=data
      console.log(id);
      //api call to get a particular id
      this.api.viewStudent(id).subscribe({
        next:(res:any)=>{
          console.log(res);
          const{departmentId}=res
          this.api.getDepartment(departmentId).subscribe((data:any)=>{
            console.log(data);
            const{name}=data
            this.department=name
          })
          this.viewstudent=res
        },
        error:(err:any)=>{
          console.log(err.message);
          this.errorMsg=err.message
        }
      })
      })
  }
}
