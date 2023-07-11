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

  constructor(zoneService: ZoneService) {
    this.zones = zoneService.getZones();
  }

  saveZones() {
    let zoneService = new ZoneService()
    zoneService.save(this.zones);
  }
}
