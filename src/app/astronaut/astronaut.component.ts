import { Component, Input, OnDestroy } from '@angular/core';

import { MissionService } from '../mission.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'my-astronaut',
  template: `
    <p> child -- 
      {{astronaut}}: <strong>{{mission}}</strong>
      <button
        (click)="confirm()"
        [disabled]="!announced || confirmed">
        Confirm
      </button>
    </p>`
})
export class AstronautComponent implements OnDestroy {
  
  @Input() astronaut: string;
  
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
        console.log("Announced Mission");
    });
    
  }
  
  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}