import { Component } from '@angular/core';

import { HEROES } from '../hero';

@Component({
  selector: 'hero-parent',
  template: `
    <h2><i>{{master}}</i> controls {{heroes.length}} heroes</h2>
    <hero-child *ngFor="let heroParent of heroes"
      [heroData]="heroParent"
      [masterName]="master">
    </hero-child>
  `
})
export class HeroParentComponent {
  heroes = HEROES;
  master = 'Dean Ambrose';
}