import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "./app.home";
// import {HeroesModule} from "./heroes/heroes.module";

const appRoutes:Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: HomePageComponent},
    // {path: 'heroes', component: HeroesModule},
    // {path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule'},
    // {path: 'heroes', loadChildren: () => require('es6-promise!./heroes/heroes.module')('HeroesModule')},

];

export const appRoutingProviders:any[] = [];

export const routing = RouterModule.forRoot(appRoutes);