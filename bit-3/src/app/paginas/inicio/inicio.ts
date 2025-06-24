import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="inicio-container">
      <h1>¡Bienvenido al Mundo Anime!</h1>
      <p>
        Sumérgete en las mejores series y descubre nuevos animes para todos los gustos.
        Aquí encontrarás desde clásicos hasta las últimas novedades del mundo otaku.
      </p>
      <p>
        Navega, descubre y disfruta de contenido cuidadosamente seleccionado para ti.
      </p>
      <div class="call-to-action">
        <a class="btn-explorar" routerLink="/animes">Explorar Animes</a>
      </div>
    </section>
  `,
  styles: [`
    .inicio-container {
      max-width: 900px;
      margin: 60px auto;
      padding: 30px 20px;
      color: #cfcfff;
      text-align: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 25px;
      color: #8181ff;
      text-shadow: 0 0 12px #4f4fff;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 18px;
      line-height: 1.6;
      color: #dddfffcc;
    }

    .call-to-action {
      margin-top: 40px;
    }

    .btn-explorar {
      background: linear-gradient(45deg, #6a00ff, #330066);
      color: #eee;
      padding: 15px 50px;
      font-size: 1.3rem;
      border-radius: 30px;
      border: none;
      cursor: pointer;
      font-weight: 700;
      box-shadow: 0 0 20px #7a33ff;
      transition: box-shadow 0.3s ease, transform 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      text-decoration: none;
      display: inline-block;
    }

    .btn-explorar:hover {
      box-shadow: 0 0 35px #8a4dff, 0 0 60px #6622ff;
      transform: scale(1.1);
    }
  `]
})
export class Inicio {}
