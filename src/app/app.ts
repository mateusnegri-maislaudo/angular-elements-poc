import { Component, Injector } from '@angular/core';
import { MenuHeader } from './menu-header/menu-header';
import { createCustomElement } from '@angular/elements';

@Component({
  standalone: true,
  imports: [MenuHeader],
  selector: 'app-root',
  template: `<app-menu-header></app-menu-header>`,
  styleUrls: ['./app.scss']
})
export class App {}
