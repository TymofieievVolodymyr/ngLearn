import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SwitchComponent } from '../irrelevant-implementation-details/switch.component';
import {ToggleComponent} from './toggle-component.component';
import {ToggleButtonComponent} from './toggle-button-component.component';
import {ToggleOffComponent} from './toggle-off-component.component';
import {ToggleOnComponent} from './toggle-on-component.component';

@NgModule({
  declarations: [
    ToggleComponent,
    ToggleButtonComponent,
    ToggleOffComponent,
    ToggleOnComponent,
    SwitchComponent,
  ],
  imports: [ CommonModule ],
  exports: [
    ToggleComponent,
    ToggleButtonComponent,
    ToggleOffComponent,
    ToggleOnComponent,
  ],
})
export class ToggleModule {}
