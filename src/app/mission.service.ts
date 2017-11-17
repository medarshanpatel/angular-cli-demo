import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MissionService {

    // Observable string sources
    private missionAnnouncedSource = new Subject<string>();
    private missionConfirmedSource = new Subject<string>();

    // Observable string stre ams
    missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    missionConfirmed$ = this.missionConfirmedSource.asObservable();
    

    // Service message commands
    announceMission(mission: string) {
        this.missionAnnouncedSource.next(mission); //console.log("mission", mission);
    }
    confirmMission(astronaut: string) {
        
        this.missionConfirmedSource.next(astronaut);
    }
}