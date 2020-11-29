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
  nav_mobile = gsap.timeline()
  nav_mobile_flag = false
  ngAfterViewInit() {

    let tl2 = gsap.timeline({
      defaults: {
        duration: 1
      }
    })


    tl2.from('.left, .right, #about', { y: -20, opacity: 0, ease: 'power4' })

    tl2.from('.logo-cube ', {
      scale: 4,
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

    gsap.from('#courses .card', {
      scale: 0.9,
      y: 30,
      stagger: 0.2,
      scrollTrigger: {
        // markers: true,
        trigger: '#courses',
        toggleActions: "play pause resume reset",
        scrub: true,
        start: 'top+30 center',
        end: 'bottom bottom'
      },
    })
  }

  mobile_menu() {
    // console.log('menu', this.nav_mobile.reversed());

    // if(!this.nav_mobile.reversed() && this.nav_mobile_flag){
    //   this.nav_mobile.reverse()
    // }
    if (this.nav_mobile_flag) {
      this.nav_mobile.to('.nav-mobile', {
        opacity: 0,
        display: 'none',
        duration: 0.3,
        ease: 'power'
      })
      this.nav_mobile_flag = false
    }
    else {

      this.nav_mobile.to('.nav-mobile', {
        opacity: 1,
        display: 'block',
        duration: 0.3,
        ease: 'power'
      })
      this.nav_mobile_flag = true
    }

  }
}
