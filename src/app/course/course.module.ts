import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './course.routes';

import { CourseComponent } from './course.component';
import { CourseService } from './course.service';

import { CourseAddComponent } from './components/course-add';
import { CourseEditComponent } from './components/course-edit';


@NgModule({
  declarations: [
    CourseComponent,
    CourseAddComponent,
    CourseEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing

  ],
  exports: [
    CourseAddComponent,
    CourseEditComponent],
    
  providers: [ CourseService],
  bootstrap: []
})
export class CourseModule { }
