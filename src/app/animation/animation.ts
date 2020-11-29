import { trigger, transition, group, query, style, animate } from '@angular/animations';

export class RouterAnimations {
  static routeSlide =
    trigger('routeAnimation', [
      transition('1 => *, 2 => *, 3 => *, 4 => *, 5 => *, 6 => *, 7 => *, 8 => *, 9 => *, 10 => *, 11 => *, 12 => *' , [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateY(100vh)', opacity: 0 })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.6s .6s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(10%)', opacity: 0 })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.8s .6s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0)', opacity: 1 }))),
        ]),
      ]),

      transition ('* <=> *', [
        style ({ transform: 'translateX(100%)', opacity: 0 }),
        animate ('0.7s cubic-bezier(.35,0,.25,1)',
          style ({ transform: 'translateX(0%)', opacity:1  }),
        ),
      ]),
    ])
}
