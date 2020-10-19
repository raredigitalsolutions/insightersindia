import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { Back, Power4, ScrollToPlugin, ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() {
    gsap.registerPlugin(ScrollTrigger)
  }

  ngOnInit(): void {

    let tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      delay: 1,
    })
    let tl2 = gsap.timeline({
      defaults: {
        duration: 1
      }
    })

    tl2.from('.left, .right', { y: -20, opacity: 0, ease: 'power4' })
    tl.from('#girl',
    {
      scrollTrigger: {
        trigger: "#girl",
        scrub: true
      },
      y: 200,
    })
  }

}
