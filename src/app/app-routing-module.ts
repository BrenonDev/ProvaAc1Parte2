import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Produto } from './produto/produto';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { Sobre } from './sobre/sobre';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'produto', component: Produto},
  {path: 'produto-detalhe/:id', component: ProdutoDetalhe},
  {path: 'sobre', component: Sobre},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
