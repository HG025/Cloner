import { Routes } from '@angular/router';
import { homeRoute } from './component/home/home.routes';
import { mainRoutes } from './component/main/main.routes';

export const routes: Routes = [
    // {
    //     path: "",
    //     redirectTo: "auth/login",
    //     pathMatch: "full"
    // },
    {
        path: "",
        redirectTo: "main",
        pathMatch: "full"
    },
    {
        path: "auth",
        loadChildren: () => import('./component/auth/auth.routes').then(m=> m.auth)
    },
    {
        path: 'home',
        children: homeRoute
    },
     {
        path: '',
        children: mainRoutes
    },

    
    
];
