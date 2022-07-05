import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { CategoryComponent } from './category/category.component';
import { StaffPostComponent } from './staff-post/staff-post.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { StaffContentFormComponent } from './staff-content-form/staff-content-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglePostComponent,
    StaffProfileComponent,
    StaffPageComponent,
    routingComponents,
    CategoryComponent,
    StaffPostComponent,
    CategoryFormComponent,
    StaffContentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
