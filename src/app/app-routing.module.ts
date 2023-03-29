import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from 'angular-ng-autocomplete';
import { AutocompComponent } from './autocomp/autocomp.component';
import { NgselectComponent } from './ngselect/ngselect.component';

const routes: Routes = [
  { path : "" , component : AutocompComponent},
  { path : "auto" , component : AutocompComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
