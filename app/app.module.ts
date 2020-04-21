import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { AaComponent } from './aa/aa.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AlertModule.forRoot() ],
  declarations: [ AppComponent, AaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
