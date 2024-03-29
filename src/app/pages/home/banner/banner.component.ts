import { style } from '@angular/animations';
import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
import { gsap } from 'gsap';
import { stringify } from 'querystring';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }
  banner_count: number
  tl = gsap.timeline()
  initial: true
  ngOnInit(): void {
    this.setup_banners()

    this.tl.from('.content ', {
      // scale: 1.6,
      ease: 'power4',
      y: 700,
      repeat: -1,
      onStart: this.reset_banners,
      onRepeat: () => {
        let unchanged = true
        for (let i = 1; i <= this.banner_count; i++) {

          let banner = document.getElementById('banner' + i)
          let next_banner = document.getElementById('banner' + (i + 1))
          if (next_banner != null && unchanged) {
            if (banner.classList.contains('visible') && i < this.banner_count) {
              banner.classList.add('none')
              banner.classList.remove('visible')

              next_banner.classList.remove('none')
              next_banner.classList.add('visible')

              let link = document.getElementById("banner_link" + (i + 1))
              this.link_active(link)
              link = document.getElementById("banner_link" + (i))
              this.link_inactive(link)

              // console.log('normal');
              unchanged = false
              break
            }
          }
          if (i == this.banner_count) {
            let banner = document.getElementById('banner' + i)
            let next_banner = document.getElementById('banner' + (1))

            banner.classList.add('none')
            banner.classList.remove('visible')

            next_banner.classList.remove('none')
            next_banner.classList.add('visible')

            let link = document.getElementById("banner_link" + (1))
            this.link_active(link)
            link = document.getElementById("banner_link" + (i))
            this.link_inactive(link)
            // console.log('not normal');
            unchanged = false
            break
          }
        }

      },
      repeatDelay: 5,
      duration: 2.5,
      delay: 0
    })
  }

  reset_banners() {
    let banners = document.querySelectorAll('.content');
    banners.forEach((banner) => {
      banner.classList.remove('display-none')
    })
  }

  setup_banners() {
    let banners = document.querySelectorAll('.content');
    let changed = false
    let i = 1
    this.banner_count = banners.length
    let container = document.getElementById('dots')

    banners.forEach(banner => {
      let link = document.createElement('a')

      link.id = "banner_link" + i
      link.setAttribute('style', "cursor:pointer; text-align:center; padding: 0.3em 0.6em; color: white; background-color: #ff3c38; border-radius: 1em; text-decoration: none")
      link.style.transitionDuration = '0.5s'
      link.style.width = '1em'
      link['(click)'] = "this.banner_seek(" + i + ")"
      link.addEventListener('click', (e) => {

        console.log(e.target);
        let target = <HTMLElement>e.target
        let id = parseInt(target.id.slice(-1))
        this.banner_seek(id)

      })

      console.log(link);

      container.appendChild(link)

      banner.setAttribute('id', 'banner' + (i++))
      if (changed == true) {
        banner.classList.add('none')
        banner.classList.add('display-none')
      } else {
        banner.classList.add('visible')
        this.link_active(link)
        changed = true
      }
      // console.log(banner);
    })

  }


  banner_seek(bannerId = 1) {
    gsap.from("#banner" + bannerId, {
      onStart: () => {
        this.tl.pause()
        console.log('done');

        let banners = document.querySelectorAll('.content');
        let i = 1
        banners.forEach(banner => {
          let link = document.getElementById('banner_link'+i)
          if (i == bannerId) {
            banner.classList.add('visible')
            banner.classList.remove('none')
            this.link_active(link)
          } else {
            banner.classList.remove('visible')
            banner.classList.add('none')
            banner.classList.add('display-none')
            this.link_inactive(link)
          }
          i++
        })
      },
      ease: 'power4',
      y: -400,
      duration: 1,
      onComplete: () => {
        this.reset_banners()
        setTimeout(() => {
          this.tl.resume()
        }, 8000)
      }
    })
  }

  link_active(link) {
    link.style.backgroundColor = '#FFF275'
    link.style.color = 'black'
    link.style.fontWeight = '700'

  }

  link_inactive(link) {
    link.style.backgroundColor = '#ff3c38'
    link.style.color = 'white'
    link.style.fontWeight = '500'
  }
}
