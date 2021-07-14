import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StolotoGameFieldComponent } from './stoloto-game-field/stoloto-game-field.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StolotoGameOutComponent } from './stoloto-game-out/stoloto-game-out.component';

@NgModule({
  declarations: [
    AppComponent,
    StolotoGameFieldComponent,
    StolotoGameOutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
