import { Course, CourseCard } from './../../../model/course.model';
import { courseData } from './../../../data/courses.data';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';




@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss',]
})

export class CourseComponent implements OnInit, AfterViewInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  contact: boolean
  data: Course
  background: string
  links: Array<string>
  cards: Array<CourseCard> = []
  cellsToShow: number = 3
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.carouselResize()
  }
  ngOnInit(): void {

    this.carouselResize()
    let route = this.router.url.split('/').slice(-1).pop()
    if (route == 'contact' && !this.contact) {
      this.contactToggle()
    }


    this.route.data.subscribe((val) => {
      // console.log(val);
      let key = val.link
      this.data = courseData[key]
      // this.background = this.data.title.split(' ').join('-').toLowerCase()
      this.background = key.toLowerCase()
      this.links = Object.keys(courseData).filter(link => {
        // link = link.split('-').join(' ')
        if (key != link) { return true }
      })
      this.filterLinks(this.shuffle(this.links))
    })

  }

  ngAfterViewInit() {
    scrollTo(0, 0)
  }

  carouselResize() {
    if (window.matchMedia("(max-width: 980px)").matches) {
      this.cellsToShow = 1
    } else if (window.matchMedia("(max-width: 1500px)").matches) {
      this.cellsToShow = 2
    } else {
      this.cellsToShow = 3
    };
  }
  filterLinks(links) {

    links.forEach(link => {
      let card = {
        title: courseData[link].title,
        link: link,
        imageSrc: link.toLowerCase(),
        alt: courseData[link].meta.title
      }
      this.cards.push(card)
    });

  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  contactToggle() {
    if (this.contact) {
      this.contact = false
    } else {
      this.contact = true
    }
  }
}
