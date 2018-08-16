import { Component, OnInit } from '@angular/core';

import { Produto } from '@models/produto.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  produto: Produto;
  produtoForm: FormGroup;

  descontoValor = '10';
  freteValor = 'R$250,00';
  precoValor = 'R$35,00 / Unidade';

  constructor(private formBuilder: FormBuilder) {
    this.produtoForm = this.createFormGroupWithBuilder(this.formBuilder);
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({});
  }

  onSubmit() {
    // Unindo em um novo objeto, os dados preenchidos no Formulário com o já existente do usuário.
    const result = Object.assign({}, this.produtoForm.value);
  }

  aplicaDesconto = quantidade => {
    const valorQuantidade = quantidade.target.value;

    switch (valorQuantidade) {
      case '300':
        this.descontoValor = '20';
        this.freteValor = 'R$300,00';
        this.precoValor = 'R$28,00 / Unidade';
        break;

      case '600':
        this.descontoValor = '25';
        this.freteValor = 'R$350,00';
        this.precoValor = 'R$26,25 / Unidade';
        break;

      default:
        this.descontoValor = '10';
        this.freteValor = 'R$250,00';
        this.precoValor = 'R$35,00 / Unidade';
        break;
    }
  };

  ngOnInit() {
    this.produto = JSON.parse(localStorage.getItem('selectProduct'));
  }
}
