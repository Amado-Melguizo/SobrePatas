import { NgModule } from '@angular/core';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { RegisterComponent } from './examples/register/register.component';
import { ForgotPasswordComponent } from './examples/forgotPassword/forgotPassword.component';
import { LandingComponent } from './examples/landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './examples/signup/signup.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent},
    { path: 'register',         component: RegisterComponent },
    { path: 'forgotPassword',   component: ForgotPasswordComponent },
    { path: 'settings',          component: LandingComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
