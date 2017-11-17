import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';// import class hero 
import { HeroService } from '../hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})

export class HeroDetailsComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  @Input() hero: Hero;

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }
  
  // save data
  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
      //console.log("this.hero",this.hero);
  }
  
  // redirect back
  goBack(): void {
    this.location.back();
  }

}