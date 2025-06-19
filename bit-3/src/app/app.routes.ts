import { Routes } from '@angular/router';
import{Login }from "../app/componentes/paginas/login/login"
import { Productos } from "../app/componentes/paginas/productos/productos"
import { PageNotFound } from './componentes/paginas/page-not-found/page-not-found';
 

export const routes: Routes = [



{
    path: "login",
    component: Login,
    title: "Login/Registro"

}
,
{
    path: "productos",
    component: Productos,
    title: "Productos/servixios",
},
{
path: "**",
component: PageNotFound,
title: "Error 404"

}


];
