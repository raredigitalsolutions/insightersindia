import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingIllustrationComponent } from './landing-illustration/landing-illustration.component';
import { BannerComponent } from './banner/banner.component';
import { MaskComponent } from './mask/mask.component';


@NgModule({
  declarations: [HomeComponent, LandingIllustrationComponent, BannerComponent, MaskComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
