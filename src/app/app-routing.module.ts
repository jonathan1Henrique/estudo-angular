import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { HomeComponent } from './views/home/home.component';
import { ProdutoComponent } from './views/produto/produto.component';



const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"produto",
    component: ProdutoComponent
  },
  {
    path:"produto/create",
    component: ProdutoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
