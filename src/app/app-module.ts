import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Home } from './home/home';
import { Produto } from './produto/produto';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { Sobre } from './sobre/sobre';
import { Menu } from './menu/menu';

@NgModule({
  declarations: [App, Home, Produto, ProdutoDetalhe, Sobre, Menu],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
