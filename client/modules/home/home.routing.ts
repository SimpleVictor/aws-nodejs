import { Routes, RouterModule } from '@angular/router';

import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./holder/holder.component";

export const routes: Routes = [
    // { path: '', redirectTo: "login" },
    { path: '', component: LoginComponent , pathMatch:"full"},
    { path: 'signup', component: SignupComponent}
];

export const routing = RouterModule.forChild(routes);
