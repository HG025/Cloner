import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";


export const auth: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
]