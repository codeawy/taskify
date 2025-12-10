import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full',
  },
  {
    path: 'todos',
    loadChildren: () => import('../app/features/todo/todo-routing.route').then((m) => m.todoRoutes),
  },
];
