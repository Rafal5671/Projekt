import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet} from '@angular/router';
import { /*slider,*//*transformer,*//* fader*/slideInAnimation} from './rout-animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    // fader,
     //slider,
    //transformer,
    slideInAnimation
  ]
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}

