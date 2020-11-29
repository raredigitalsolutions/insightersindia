import { RouterAnimations } from './../../animation/animation';
import { courseData } from './../../data/courses.data';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';
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
  constructor(private router: Router, private route: ActivatedRoute) {
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
      });
  }
  animationParams = {}
  depth: number
  ngOnInit(): void {
  }
  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }
}
