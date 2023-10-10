import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { EditStudentDetailsComponent } from './edit-student-details/edit-student-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //home page : //http://localhost:4200/
  { path:'',component:HomeComponent },

    //home page : //http://localhost:4200/all-students
  { path:'all-students', component:AllStudentsComponent },

    //home page : //http://localhost:4200/add-student
  { path:'add-student',component:AddStudentComponent},

    //home page : //http://localhost:4200/view-student/id
  { path:'view-student/:id',component:ViewStudentComponent},

    //home page : //http://localhost:4200/edit-student/id
  { path:'edit-student/:id',component:EditStudentDetailsComponent},

    //if page-not found
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
