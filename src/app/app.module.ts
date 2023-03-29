import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgselectComponent } from './ngselect/ngselect.component';
import { AutocompComponent } from './autocomp/autocomp.component';
import { FormsModule } from '@angular/forms';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    NgselectComponent,
    AutocompComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
