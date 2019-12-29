import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeService } from './employee.service';
import { ChildComponent } from './child/child.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,FlexLayoutModule],
  declarations: [ AppComponent, HelloComponent, ChildComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeService]
})
export class AppModule { }
