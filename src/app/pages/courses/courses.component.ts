import { MetaService } from './../../services/meta.service';
import { RouterAnimations } from './../../animation/animation';
import { courseData } from './../../data/courses.data';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  animations: [
    RouterAnimations.routeSlide
  ]
})
export class CoursesComponent implements OnInit {

  currentDepth: number
  nextDepth: number
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private meta: MetaService
  ) {

  }
  animationParams = {}
  depth: number
  metaMutation: boolean = false
  ngOnInit(): void {

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.route.snapshot),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .subscribe((route: ActivatedRouteSnapshot) => {
        this.nextDepth = route.data.depth
        let key = route.data.link
        let data = courseData[key]
        console.log(key);

        if (data) {
          this.genrateMeta(data, key)
          this.meta.createCanonicalURL(`https://www.insightersindia.in/courses/${key}`)
        }


        // console.log('https://www.insightersindia.in' + this.router.routerState.snapshot.url);

      });

    let key = this.router.url.split('/').slice(-1)[0]
    let data = courseData[key]
    if (data) {
      this.genrateMeta(data, key)
      this.meta.createCanonicalURL(`https://www.insightersindia.in/courses/${key}`)
    } else {
      let key = this.router.url.split('/').slice(-2)[0]
      let data = courseData[key]
      this.genrateMeta(data, key)
      this.meta.createCanonicalURL(`https://www.insightersindia.in/courses/${key}`)
    }

    // console.log('akma');



  }
  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }

  genrateMeta(data, key){
    if (data.meta) {
      this.meta.generateTags({
        title: data.meta.title,
        description: data.meta.description,
        slug: key
      })
    } else  {
      this.meta.generateTags({
        title: data.title,
        description: data.snippet,
        slug: key
      })
    }
  }
}
