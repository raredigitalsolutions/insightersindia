import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [CoursesComponent, CourseComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    IvyCarouselModule,
    ComponentsModule
  ]
})
export class CoursesModule { }
