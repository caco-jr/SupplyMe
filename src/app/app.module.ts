import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { HomeComponent } from '@fornecedor/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProdutoComponent } from './shared/components/produto/produto.component';
import { SecaoProdutosComponent } from './fornecedor/home/secao-produtos/secao-produtos.component';
import { CadastroComponent } from './vendedor/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProdutoComponent,
    SecaoProdutosComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
