import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeropageComponent } from './heropage/heropage.component';
import { SidebarComponent } from './homepage/sidebar/sidebar.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { ContentComponent } from './homepage/content/content.component';
import { HeronavbarComponent } from './heropage/heronavbar/heronavbar.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { CategoryComponent } from './category/category.component';
import { StaffPostComponent } from './staff-post/staff-post.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { StaffContentFormComponent } from './staff-content-form/staff-content-form.component';
import { FooterComponent } from './footer/footer.component';
import { EditStaffprofileComponent } from './edit-staffprofile/edit-staffprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminComponent,
    HomepageComponent,
    HeropageComponent,
    SidebarComponent,
    NavbarComponent,
    ContentComponent,
    HeronavbarComponent,
    EditprofileComponent,
    ReportsComponent,
    SinglePostComponent,
    StaffProfileComponent,
    StaffPageComponent,
    CategoryComponent,
    StaffPostComponent,
    CategoryFormComponent,
    StaffContentFormComponent,
    FooterComponent,
    EditStaffprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
