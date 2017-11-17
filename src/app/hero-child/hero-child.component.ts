import { Component, Input } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'hero-child',
  template: `
    <h3>{{heroData.name}} says:</h3>
    <p>I am <b>{{heroData.name}}</b> at your service, <i>{{masterName}}</i>.</p>
  `
})
export class HeroChildComponent {
  @Input() heroData: Hero;
  @Input() masterName: string;
}