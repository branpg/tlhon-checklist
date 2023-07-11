import {Injectable} from '@angular/core';
import {Zone} from "./zone";
import {ZONES} from "./zones";

@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  private zones: Zone[];

  constructor() {
    this.zones = JSON.parse(localStorage.getItem('zones') ?? '[]');
    if (this.zones.length === 0) {
      this.zones = ZONES;
    }
  }

  public getZones(): Zone[] {
    return this.zones;
  }

  public save(zones: Zone[]) {
    localStorage.setItem('zones', JSON.stringify(zones));
  }
}
