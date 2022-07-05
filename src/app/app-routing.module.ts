import { CategoryFormComponent } from './category-form/category-form.component';
import { StaffContentFormComponent } from './staff-content-form/staff-content-form.component';
import { CategoryComponent } from './category/category.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'profile', component: StaffProfileComponent },
  { path: 'staff-page', component: StaffPageComponent },
  { path: 'single-post', component: SinglePostComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'staff-content-form', component: StaffContentFormComponent },
  { path: 'category-form', component: CategoryFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents=[StaffProfileComponent,StaffPageComponent,CategoryComponent,StaffContentFormComponent,CategoryFormComponent]
