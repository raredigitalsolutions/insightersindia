import { RouterAnimations } from './animation/animation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [RouterAnimations.routeSlide]
})
export class AppComponent {
  title = 'insighters-india';
}
