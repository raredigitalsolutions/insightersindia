import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { MaskComponent } from './mask/mask.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './../components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestimonialsComponent } from './testimonials/testimonials.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, MaskComponent, TeamComponent, ContactComponent, TestimonialsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
