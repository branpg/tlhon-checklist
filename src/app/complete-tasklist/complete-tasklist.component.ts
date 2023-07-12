import { Component } from '@angular/core';
import {Zone} from "../zone";
import {ZoneService} from "../zone.service";

@Component({
  selector: 'app-complete-tasklist',
  templateUrl: './complete-tasklist.component.html',
  styleUrls: ['./complete-tasklist.component.scss']
})
export class CompleteTasklistComponent {
  zones: Zone[];
  spoilers: boolean;

  constructor(zoneService: ZoneService) {
    this.zones = zoneService.getZones();
    this.spoilers = JSON.parse(localStorage.getItem('spoilers') ?? 'false');
  }

  saveZones() {
    let zoneService = new ZoneService()
    zoneService.save(this.zones);
  }

  reset() {
    let zoneService = new ZoneService()
    zoneService.save([]);
    this.zones = zoneService.getZones();
    window.location.reload();
  }

  changeSpoilers() {
    this.spoilers = !this.spoilers;
    localStorage.setItem('spoilers', JSON.stringify(this.spoilers));
  }
}
