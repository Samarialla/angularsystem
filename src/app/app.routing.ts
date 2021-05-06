import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginGuardGuard } from './shared/guards/login-guard.guard';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full', },
  { path: '', component: AdminLayoutComponent, children: [{ path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule' }], /*canActivate: [LoginGuardGuard]*/ },
  { path: '**', redirectTo: 'dashboard' }

]

 // Se agrega el canActive para verificar si esta logueado o no
