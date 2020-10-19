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
      yoyo: false,
      delay: 0.5,
    })
    let tl2 = gsap.timeline({
      defaults: {
        duration: 1
      }
    })

    tl2.from('.left, .right, #about', { y: -20, opacity: 0, ease: 'power4' })
    tl.to('#wave', {
      scale: 7,
      transformOrigin: 'center',
      opacity: 0,
      duration: 10,
      ease: 'power4'
    })

    gsap.from('.card', {
      scale: 0.8,
      stagger: 0.08,
      scrollTrigger: {
        trigger: '#about',
        toggleActions: "play pause resume reset",
        scrub: true,
        start: '+=300 bottom',
        end: 'center center'
      },
    })
  }

}
