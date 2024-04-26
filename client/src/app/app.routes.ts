import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { blockPage } from './guards/blockSinAdmin/login-block.guard';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { blockLock } from './guards/blockSinToken/block';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
    },

    {
        path: 'login',
        component: LoginPageComponent,
    },

    {
        path: 'register',
        component: RegisterPageComponent,
    },

    {
        path: 'home',
        component: HomeComponent,
        canActivate : [blockLock]
        
    },

    {
        path: 'user',
        component: UsersPageComponent,
        canActivate : [blockPage]
    },
];
