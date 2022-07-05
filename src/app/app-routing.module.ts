import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HeropageComponent } from './heropage/heropage.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path:"admin",
    component: AdminComponent
  },
  {
    path:"homepage",
    component: HomepageComponent
  },
  {
    path:"heropage",
    component: HeropageComponent
  },
  {
    path:"editprofile",
    component: EditprofileComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
