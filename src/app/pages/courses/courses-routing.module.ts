import { ContactComponent } from './../components/contact/contact.component';
import { CourseComponent } from './course/course.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    path: '', component: CoursesComponent,
    children: [
      { path: '', component: CourseComponent, data: { link: 'Emotional-Intelligence', depth: 2 }, redirectTo: 'Emotional-Intelligence' },
      {
        path: 'Emotional-Intelligence', component: CourseComponent, data: { link: 'Emotional-Intelligence', depth: 2 },
        children: [{ path: 'contact', component: ContactComponent, data: { subject: 'Emotional Intelligence' } }]
      },
      {
        path: 'Law-Of-Attraction', component: CourseComponent, data: { link: 'Law-Of-Attraction', depth: 1 },
        children: [{ path: 'contact', component: ContactComponent, data: { subject: 'Law Of Attraction' } }]
      },
      {
        path: 'Motivational-Training', component: CourseComponent, data: { link: 'Motivational-Training', depth: 3 },
        children: [{ path: 'contact', component: ContactComponent, data: { subject: 'Motivational Training' } }]
      },
      {
        path: 'NLP-Training', component: CourseComponent, data: { link: 'NLP-Training', depth: 4 },
        children: [{ path: 'contact', component: ContactComponent, data: { subject: 'NLP Training' } }]
      },
      {
        path: 'OD-Intervention', component: CourseComponent, data: { link: 'OD-Intervention', depth: 5 },
        children: [{ path: 'contact', component: ContactComponent, data: { subject: 'OD Intervention' } }]
      },
      {
        path: 'Stress-Management', component: CourseComponent, data: { link: 'Stress-Management', depth: 6 },
        children: [{ path: 'contact', component: ContactComponent, data: { subject: 'Stress-Management' } }]
      },
      {
        path: 'Time-Management', component: CourseComponent, data: { link: 'Time-Management', depth: 7 },
        children: [{ path: 'contact', component: ContactComponent, data: { subject: 'Time Management' } }]
      },
    ]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
