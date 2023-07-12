import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Zone} from "../zone";
import {Step} from "../step";

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent {
  @Input() zone!: Zone;
  @Input() spoilers!: boolean;
  showSteps: boolean;
  @Output() stepChanged: EventEmitter<string>;

  constructor() {
    this.showSteps = false;
    this.stepChanged = new EventEmitter<string>();
  }

  ngOnInit() {
    this.showSteps = !this.zone.completed;
    this.zone.steps.forEach(function (step) {
      step.showHints = 0;
    })
  }

  toggleStepCompleted(step: Step) {
    step.completed = !step.completed;
    step.showHints = 0;
    this.checkCompleted();
    this.showSteps = !this.zone.completed || !this.showSteps;
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
    this.zone.completed = incomplete.length === 0;
  }

  showHint(step: Step) {
    step.showHints++;
  }
}
