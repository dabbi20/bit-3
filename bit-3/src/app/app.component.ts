import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navegacion } from './shared/navegacion/navegacion'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navegacion, RouterModule],
  template: `
    <app-navegacion></app-navegacion>
    <router-outlet></router-outlet>
  `,
 
})
export class AppComponent {}
