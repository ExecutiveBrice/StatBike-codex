import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./features/tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.page').then((m) => m.DashboardPage)
      },
      {
        path: 'history',
        loadComponent: () => import('./features/history/history.page').then((m) => m.HistoryPage)
      },
      {
        path: 'map',
        loadComponent: () => import('./features/map/map.page').then((m) => m.MapPage)
      },
      {
        path: 'settings',
        loadComponent: () => import('./features/settings/settings.page').then((m) => m.SettingsPage)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tabs/dashboard'
  },
  {
    path: '**',
    redirectTo: 'tabs/dashboard'
  }
];
