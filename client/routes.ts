import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: 'client/modules/home/home.module#HomeModule' },
    { path: 'users', loadChildren: 'client/modules/authenticated/authenticated.module#AuthenticatedModule' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
