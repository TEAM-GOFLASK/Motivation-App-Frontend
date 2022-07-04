import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeropageComponent } from './heropage/heropage.component';
import { SidebarComponent } from './homepage/sidebar/sidebar.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { ContentComponent } from './homepage/content/content.component';
import { HeronavbarComponent } from './heropage/heronavbar/heronavbar.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomepageComponent,
    HeropageComponent,
    SidebarComponent,
    NavbarComponent,
    ContentComponent,
    HeronavbarComponent,
    EditProfileComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
