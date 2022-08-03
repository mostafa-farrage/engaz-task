import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CreateComponent } from './create/create.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/guards/auth-guard.service ';
import { LoginComponent } from './page/login.component';



export const routes: Routes = [
{path: '', redirectTo: 'login', pathMatch: 'full'},
{path:'login',component:LoginComponent},
{path:'register',component:LoginComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})

export class LoginModule { }