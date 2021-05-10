import {Component, Output, EventEmitter, ContentChild, AfterContentInit} from '@angular/core';
import {ToggleOnComponent} from './toggle-on-component.component';
import {ToggleOffComponent} from './toggle-off-component.component';
import {ToggleButtonComponent} from './toggle-button-component.component';


@Component({
  selector: 'toggle',
  template: '<ng-content></ng-content>',
})
export class ToggleComponent implements AfterContentInit {
  on: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(ToggleOnComponent) toggleOn: ToggleOnComponent;
  @ContentChild(ToggleOffComponent) toggleOff: ToggleOffComponent;
  @ContentChild(ToggleButtonComponent) toggleButton: ToggleButtonComponent;

  ngAfterContentInit(): void {
    this.toggleButton.toggle.subscribe(on => {
      this.on = on;
      this.toggle.emit(on);
      this.update();
    });
  }



  update(): void {
    this.toggleOn.on = this.on;
    this.toggleOff.on = this.on;
    this.toggleButton.on = this.on;
  }
}
