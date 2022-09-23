import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './module1/component1/component1.component';
import { Component2Component } from './module2/component2/component2.component';

const routes: Routes = [
  {path: 'module1', component: Component1Component},
  {path: 'module2', component: Component2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
