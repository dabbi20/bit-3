import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  template: `<h1>Página no encontrada (404)</h1>`,
  styles: [`h1 { color: red; }`]
})
export class PageNotFound {}
