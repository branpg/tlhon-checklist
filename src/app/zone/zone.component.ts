import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Zone} from "../zone";
import {Step} from "../step";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent {
  @Input() zone!: Zone;
  showSteps: boolean;
  @Output() stepChanged: EventEmitter<string>;

  constructor() {
    this.showSteps = false;
    this.stepChanged = new EventEmitter<string>();
  }

  ngOnInit() {
    this.showSteps = !this.zone.completed;
  }

  toggleStepCompleted(step: Step) {
    step.completed = !step.completed;
    let incomplete = this.zone.steps.filter(step => !step.completed);
    if (incomplete.length === 0) {
      this.zone.completed = true;
    } else {
      this.zone.completed = false;
    }
    this.showSteps = !this.zone.completed;
    this.stepChanged.emit();
  }

  toggleStepsVisibility() {
    this.showSteps = !this.zone.completed || !this.showSteps;
  }
}
