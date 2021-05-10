import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyToggleComponent } from './my-toggle.component';
import { SwitchComponent } from './irrelevant-implementation-details/switch.component';
import { ToggleModule } from './toggle/toggle.module';
import {LabelledStateComponent} from './labelled-state.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ToggleModule ],
  declarations: [ AppComponent, MyToggleComponent, SwitchComponent, LabelledStateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
