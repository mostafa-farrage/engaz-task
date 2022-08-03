import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../guards/auth-guard.service ';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../components/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'panel',
    loadChildren: () => import('../components/app-panel/app-panel.module').then(m => m.AppPanelModule),
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: []
})
export class AppRoutingModule { }
