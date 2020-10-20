import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-landing-illustration',
  templateUrl: './landing-illustration.component.html',
  styleUrls: ['./landing-illustration.component.scss']
})
export class LandingIllustrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let tl = gsap.timeline({
      repeat: -1,
      yoyo: false,
      delay: 0.5,
    })

    tl.to('#wave', {
      scale: 7,
      transformOrigin: 'center',
      opacity: 0,
      duration: 10,
      ease: 'power4'
    })
  }

}
