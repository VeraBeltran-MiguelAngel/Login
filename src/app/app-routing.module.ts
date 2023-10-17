import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { ForgotPasswordComponent } from './componets/forgot-password/forgot-password.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';
//import { AuthGuard } from './guards/auth.guard'; version antigua
import { auth2Guard } from './guards/auth2.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: 'admin',
    //canActivate: [AuthGuard],version antigua
    canActivate:[auth2Guard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
