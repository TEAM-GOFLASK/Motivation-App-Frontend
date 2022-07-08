import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { StudentComponent } from './student/student.component';
import { ErrorInterceptor, JwtInterceptor } from './_helpers';
import { StdProfileComponent } from './student/std-profile/std-profile.component';
import { StdPostFormComponent } from './student/std-post/std-post-form/std-post-form.component';
import { StdPostComponent } from './student/std-post/std-post.component';
import { PanelComponent } from './student/panel/panel.component';
import { CategoriesComponent } from './student/panel/categories/categories.component';
import { StdSuggestionComponent } from './student/panel/std-suggestion/std-suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    StudentComponent,
    StdProfileComponent,
    StdPostFormComponent,
    StdPostComponent,
    PanelComponent,
    CategoriesComponent,
    StdSuggestionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
