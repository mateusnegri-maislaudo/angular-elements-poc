import { Component, Injector, Input, ViewEncapsulation } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@Component({
  standalone: true,
  selector: 'app-menu-header',
  imports: [],
  templateUrl: './menu-header.html',
  styleUrls: ['./menu-header.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MenuHeader { 
  constructor(injector: Injector) {//Não builda assim
    const menuHeaderElement = createCustomElement(MenuHeader, { injector });

    if (!customElements.get('menu-header')) {
      customElements.define('menu-header', menuHeaderElement);
    }
  }
  @Input() usuario: string = '';
  @Input() sigla: string = '';
}