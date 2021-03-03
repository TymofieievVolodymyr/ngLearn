import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {ButtonComponent} from './child/child.component';
import { IconComponent } from './icon/icon.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
