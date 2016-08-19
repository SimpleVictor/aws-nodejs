import { Routes, RouterModule } from '@angular/router';
import {AuthHomeComponent} from "./home/auth-home.component";


export const routes: Routes = [
    // { path: '', redirectTo: "login" },
    { path: '', component: AuthHomeComponent , pathMatch:"full"},
];

export const routing = RouterModule.forChild(routes);
