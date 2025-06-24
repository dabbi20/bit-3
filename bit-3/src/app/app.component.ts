import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navegacion } from './shared/navegacion/navegacion'; // Ajusta esta ruta según dónde tengas el componente Navegacion

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
