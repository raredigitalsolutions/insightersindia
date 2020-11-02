import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    gsap.from('#team .card', {
      scale: 0.9,
      y: 30,
      stagger: 0.2,
      scrollTrigger: {
        // markers: true,
        trigger: '#team',
        toggleActions: "play pause resume reset",
        scrub: true,
        start: 'top+30 bottom',
        end: 'bottom bottom'
      },
    })
  }
}
