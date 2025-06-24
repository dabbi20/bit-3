import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Animes } from './paginas/animes/animes';
import { PageNotFound } from './paginas/page-not-found/page-not-found';

export const routes: Routes = [

    {path: "" , component: Inicio, pathMatch: 'full'},
    {path: 'animes', component: Animes },
    {path: '**', component: PageNotFound },


];
