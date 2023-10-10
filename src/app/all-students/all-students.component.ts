import { Component ,OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit{
  
  allStudents:any=[]
  isLoading:boolean=true
  errorMsg:string=''
  searchKey:string=''

  constructor(private api:ApiService){}

ngOnInit(): void {
  this.getAllStudents()
}
//get all students
getAllStudents(){
  this.api.getAllStudents().subscribe({
    next:(res:any)=>{
      console.log(res);
      setTimeout(()=>{
        this.allStudents=res
        this.isLoading=false
      },2000)
      
    },
    error:(err:any)=>{
      console.log(err.message)
      this.errorMsg=err.message
      this.isLoading=false
    }
  }
  )
}
deleteStudent(id:any){
  this.api.deleteStudent(id).subscribe({
    next:(res:any)=>{
    this.getAllStudents()
      
    },
    
    error:(err:any)=>{
      console.log(err.message);
      
    }
  })
}
}
