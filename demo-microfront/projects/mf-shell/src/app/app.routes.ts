import { Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dummy',
  template: '<h1>Dummy Component</h1>'
})
export class DummyComponent {}

export const routes: Routes = [
  {
    path: 'dummy',
    component: DummyComponent,  // Ruta de prueba simple
  },
  {
    path: '',
    redirectTo: 'dummy',
    pathMatch: 'full',
  },
];




