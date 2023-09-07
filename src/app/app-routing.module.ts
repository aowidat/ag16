import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { Error404Component } from './page/error404/error404.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { authGuardGuard } from './service/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [authGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
