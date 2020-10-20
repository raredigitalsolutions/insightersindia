import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingIllustrationComponent } from './landing-illustration/landing-illustration.component';


@NgModule({
  declarations: [HomeComponent, LandingIllustrationComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
