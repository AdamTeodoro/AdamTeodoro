import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'learn',
    loadChildren: () => import('../app/pages/learn/learn.module').then(m => m.LearnModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
