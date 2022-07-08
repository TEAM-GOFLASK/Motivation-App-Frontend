import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { StudentComponent } from './student/student.component';
import { StdProfileComponent } from './student/std-profile/std-profile.component';
import { StdPostFormComponent } from './student/std-post/std-post-form/std-post-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path:'student', component:StudentComponent,
    children:[
      {path: 'profile/edit', component: StdProfileComponent},
      {path: 'add/post', component: StdPostFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
