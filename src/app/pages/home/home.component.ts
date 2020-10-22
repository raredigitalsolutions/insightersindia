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
  banner2: string
  banner1: string
  banner3: string
  ngOnInit(): void {
    this.banner2 = 'none'
    this.banner1 = 'visible'
    this.banner3 = 'none'
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

    let tl3 = gsap.timeline({
      defaults: {
        duration: 1
      }
    })
    // tl3.from('.content ', {
    //   // scale: 1.6,
    //   ease: 'power2',
    //   y: 700,
    //   repeat: -1,
    //   onRepeat: () => {
    //     let list = [
    //       this.banner1,
    //       this.banner2,
    //       this.banner3
    //     ]
    //     let i = 1
    //     let changed = false
    //     for (let index = 1; index <= list.length; index++) {
    //       let banner = document.getElementById('banner' + i)
    //       let next_banner = document.getElementById('banner' + (i + 1))
    //       if (next_banner != null) {
    //         if (!banner.classList.contains('none')) {
    //           banner.classList.add('none')
    //           banner.classList.remove('visible')

    //           next_banner.classList.remove('none')
    //           next_banner.classList.add('visible')
    //         }
    //       }

    //     }
    //     // for (const key in list) {
    //     //   if (Object.prototype.hasOwnProperty.call(list, key)) {
    //     //     let val = eval('this.banner' + i++)
    //     //     if (val == 'visible' && changed == false) {
    //     //       eval('this.banner' + i + ' = "visible"')
    //     //       eval('this.banner' + (i - 1) + ' = "none"')
    //     //       if (!document.getElementById('banner' + (i - 1)).classList.contains('none')) {
    //     //         document.getElementById('banner').classList.add('visible')
    //     //       }
    //     //       changed = true
    //     //       console.log(i, 'not énd');
    //     //     } else if (changed == false && i == list.length) {
    //     //       eval('this.banner' + 1 + ' = "visible"')
    //     //       eval('this.banner' + (i - 1) + ' = "none"')
    //     //       console.log(i, 'énd');
    //     //     }
    //     //   }
    //     // }
    //   },
    //   repeatDelay: 5,
    //   duration: 1,
    //   delay: 0.8
    // })

    tl2.from('.left, .right, #about', { y: -20, opacity: 0, ease: 'power4' })
    tl.to('#wave', {
      scale: 7,
      transformOrigin: 'center',
      opacity: 0,
      duration: 10,
      ease: 'power4'
    })

    tl2.to('#logo', {
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

  getBanner() {
    return this.banner1
  }
  bannerSwap() {
    let list = [
      this.banner2,
      this.banner1
    ]
    this.banner1 = "none"

  }
}
