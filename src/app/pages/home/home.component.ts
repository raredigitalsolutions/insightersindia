import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { Back, ScrollTrigger } from 'gsap/all';

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

  }

  ngAfterViewInit() {

    let tl2 = gsap.timeline({
      defaults: {
        duration: 1
      }
    })


    tl2.from('.left, .right, #about', { y: -20, opacity: 0, ease: 'power4' })

    tl2.from('.logo-cube ', {
      scale:4,
      transformOrigin: 'center',
      ease: 'powrer4',
      duration: 1.5
    }).to('#logo', {
      rotate: 360,
      transformOrigin: 'center',
      ease: Back.easeInOut,
      duration: 2,
      repeatDelay: 4,
    })
    tl2.to('#logo', {
      rotate: 480,
      transformOrigin: 'center',
      repeat: -1,
      ease: Back.easeInOut,
      duration: 2.5,
      repeatDelay: 5,
      delay: 2.3
    })

    gsap.from('#about .card', {
      scale: 0.8,
      y: 60,
      stagger: 0.2,
      scrollTrigger: {
        // markers: true,
        trigger: '#about',
        toggleActions: "play pause resume reset",
        scrub: true,
        start: 'top bottom ',
        end: 'bottom bottom'
      },
    })

    gsap.from('#partners .card', {
      scale: 0.8,
      y: 60,
      stagger: 0.2,
      scrollTrigger: {
        // markers: true,
        trigger: '#partners',
        toggleActions: "play pause resume reset",
        scrub: true,
        start: 'top bottom ',
        end: 'center center'
      },
    })

    gsap.from('#service .card', {
      scale: 0.9,
      y: 30,
      stagger: 0.2,
      scrollTrigger: {
        // markers: true,
        trigger: '#service',
        toggleActions: "play pause resume reset",
        scrub: true,
        start: 'top+30 bottom',
        end: 'bottom bottom'
      },
    })

  }

}
