import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: 'client/modules/home/home.module#HomeModule' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
