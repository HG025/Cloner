import { Routes } from '@angular/router';
import { homeRoute } from './component/home/home.routes';

export const routes: Routes = [
    // {
    //     path: "",
    //     redirectTo: "auth/login",
    //     pathMatch: "full"
    // },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "auth",
        loadChildren: () => import('./component/auth/auth.routes').then(m=> m.auth)
    },
    {
        path: '',
        children: homeRoute
    }
];
