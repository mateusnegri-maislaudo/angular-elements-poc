import { bootstrapApplication } from '@angular/platform-browser';
import { WrapperComponent } from './app/menu-header/wrapper.component';
import { importProvidersFrom, Injector, Input, provideZoneChangeDetection } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import 'zone.js';
import { createCustomElement } from '@angular/elements';
import { MenuHeader } from './app/menu-header/menu-header';
import { App } from './app/app';
import { appConfig } from './app/app.config';

// bootstrapApplication(WrapperComponent, {
//   providers: [
//     importProvidersFrom(CommonModule, FormsModule)
//   ]
// });

bootstrapApplication(MenuHeader, { 
  // ... appConfig, 
  ...{
    providers: [
      importProvidersFrom(CommonModule, FormsModule, Input),
    ]
  }})
.catch((err) => console.error(err));

// bootstrapApplication(class {
//   constructor(injector: Injector) {
//     const el = createCustomElement(MenuHeader, { injector });
//     customElements.define('menu-header', el);
//   }
// });

// bootstrapApplication(App).then(appRef => {
//   const injector = appRef.injector;
//   const el = createCustomElement(MenuHeader, { injector });
//   customElements.define('menu-header', el);
// });

// export function registerMenuHeader(injector: Injector) {
//   const el = createCustomElement(MenuHeader, { injector });
//   customElements.define('menu-header', el);
// }
