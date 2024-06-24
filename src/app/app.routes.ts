import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./business/dashboard/dashboard.component'),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      }
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./business/auth/login/login.component'),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
];
