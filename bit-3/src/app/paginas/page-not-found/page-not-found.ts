// src/app/paginas/page-not-found/page-not-found.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container">
      <h1>404 - Página no encontrada</h1>
      <p>Oops... la página que buscas no existe.</p>
      <a routerLink="/" class="btn-home">Volver al Inicio</a>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
      padding: 40px;
      color: #ccc;
      background: #121517;
      border-radius: 12px;
      max-width: 500px;
      margin: 50px auto;
      box-shadow: 0 0 15px #1e90ff88;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 15px;
      color: #1e90ff; /* azul intenso */
    }
    p {
      font-size: 1.25rem;
      margin-bottom: 30px;
      color: #a0a7b1;
    }
    .btn-home {
      display: inline-block;
      padding: 12px 25px;
      background: #1e90ff; /* azul intenso */
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: bold;
      transition: background 0.3s ease;
    }
    .btn-home:hover {
      background: #105ecc; /* azul más oscuro */
    }
  `]
})
export class PageNotFound {}
