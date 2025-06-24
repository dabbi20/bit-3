import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="" routerLinkActive="active">Inicio</a> |
      <a routerLink="animes" routerLinkActive="active">Animes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav a {
      margin-right: 15px;
      text-decoration: none;
      color: darkblue;
    }
    .active {
      font-weight: bold;
      text-decoration: underline;
    }
  `]
})
export class AppComponent {}

