import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LabelledButtonComponent } from './labelled-button.component';
import { LabelledStateComponent } from './labelled-state.component';
import { ToggleModule } from './toggle/toggle.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ToggleModule ],
  declarations: [ AppComponent, LabelledButtonComponent, LabelledStateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
