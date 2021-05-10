import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toggle-button',
  template: '<switch [on]="on" (click)="onClick()" ></switch>',
})
export class ToggleButtonComponent  {
  on: boolean = true;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  onClick(): void {
    this.on = !this.on;
    this.toggle.emit(this.on);
  }
}
