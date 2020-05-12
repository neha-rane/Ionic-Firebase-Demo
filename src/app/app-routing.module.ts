import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'new-task/:id',
    loadChildren: () => import('./new-task/new-task.module').then(m => m.NewTaskPageModule)
  },
  {
    path: 'new-task',
    loadChildren: () => import('./new-task/new-task.module').then(m => m.NewTaskPageModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then(m => m.TaskPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
