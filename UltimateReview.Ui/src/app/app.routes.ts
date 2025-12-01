import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'weather',
    loadComponent: () => import('./weather.component').then(m => m.WeatherComponent)
  }
];
