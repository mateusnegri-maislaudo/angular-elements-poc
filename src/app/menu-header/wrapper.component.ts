import { Component, Injector, Input } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MenuHeader } from './menu-header';

@Component({
  selector: 'menu-header-wrapper',
  standalone: true,
  templateUrl: 'menu-header.html'
})
export class WrapperComponent {
  constructor(injector: Injector) {
    const menuHeaderElement = createCustomElement(MenuHeader, { injector });

    if (!customElements.get('menu-header')) {
      customElements.define('menu-header', menuHeaderElement);
    }
  }

  @Input() usuario: string = '';
  @Input() sigla: string = '';
}
