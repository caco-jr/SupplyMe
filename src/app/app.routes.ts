import { Routes } from '@angular/router';

import { HomeComponent } from '@fornecedor/home/home.component';
import { CadastroComponent } from '@vendedor/cadastro/cadastro.component';
import { CadastroEanComponent } from '@fornecedor/cadastro-ean/cadastro-ean.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'v/cadastro', component: CadastroComponent },
  { path: 'f/cadastro-ean', component: CadastroEanComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'product-page', component: ProductPageComponent }
];
