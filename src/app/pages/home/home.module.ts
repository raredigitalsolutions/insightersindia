import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { MaskComponent } from './mask/mask.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import {MatGridListModule} from '@angular/material/grid-list'
import { GalleryModule, GALLERY_CONFIG } from 'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';


@NgModule({
  declarations: [HomeComponent, BannerComponent, MaskComponent, TeamComponent, TestimonialsComponent, GalleryComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    MatGridListModule,
    GalleryModule,
    LightboxModule
  ],
  providers: [ {
    provide: GALLERY_CONFIG,
    useValue: {
      dots: true,
      imageSize: 'cover'
    }
  }]
})
export class HomeModule { }
