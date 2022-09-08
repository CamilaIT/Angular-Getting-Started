import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `<div>
    <h1>{{ pageTitle }}</h1>
    <div>First App</div>
  </div>`
})

export class AppComponent {
  pageTitle: string = 'Acme Gerenciamento de Produtos'
}