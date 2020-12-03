import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem, Gallery, GalleryConfig,ThumbnailsPosition  } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {


  constructor(private gallery: Gallery, private lightbox: Lightbox, private breakpointObserver: BreakpointObserver) {
    this.galleryConfig$ = breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).pipe(
      map(res => {

        if (res.matches) {
          return {
            thumbPosition: ThumbnailsPosition.Top,
            thumbWidth: 80,
            thumbHeight: 80
          };
        }
        return {
          thumbPosition: ThumbnailsPosition.Left,
          thumbWidth: 120,
          thumbHeight: 90
        };
      })
    );
  }
  images: GalleryItem[] = [];
  galleryConfig$: Observable<GalleryConfig>;
  ngOnInit(): void {
    for (let index = 1; index <= 10; index++) {
      let image = new ImageItem({ src: 'assets/gallery/' + index + '.jpg', thumb: 'assets/gallery/' + index + '.jpg' })
      this.images.push(image)
    }

    this.gallery.ref('lightbox').load(this.images);

  }

  open() {
    this.lightbox.open(0, 'lightbox', {
      panelClass: 'fullscreen'
    })
  }
}
