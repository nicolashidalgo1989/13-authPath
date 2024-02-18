import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { isAutheticatedGuard, isNotAutheticatedGuard } from './auth/guards';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [ isNotAutheticatedGuard ],
    loadChildren: () => import('./auth/auth.module').then( m => AuthModule )
  },
  {
    path: 'dashboard',
    canActivate: [ isAutheticatedGuard ],
    loadChildren: () => import('./dashboard/dashboard.module').then( m => DashboardModule )
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
