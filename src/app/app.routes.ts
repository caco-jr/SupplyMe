import { Routes } from '@angular/router';

import { HomeComponent } from '@fornecedor/home/home.component';
import { CadastroComponent } from '@vendedor/cadastro/cadastro.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'v/cadastro', component: CadastroComponent }
];
