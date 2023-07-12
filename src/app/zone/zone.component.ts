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
    this.checkCompleted();
    this.stepChanged.emit();
  }

  toggleStepsVisibility(event: MouseEvent|TouchEvent) {
    if (event.ctrlKey || event.metaKey) {
      this.zone.steps.forEach(function (step) {
        step.completed = true;
      });
      this.checkCompleted();
      this.stepChanged.emit();
    }
    this.showSteps = !this.zone.completed || !this.showSteps;
  }

  checkCompleted() {
    let incomplete = this.zone.steps.filter(step => !step.completed);
    console.log(incomplete);
    if (incomplete.length === 0) {
      this.zone.completed = true;
    } else {
      this.zone.completed = false;
    }
  }
}
