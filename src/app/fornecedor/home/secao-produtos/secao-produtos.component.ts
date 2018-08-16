import { Component, OnInit, Input } from '@angular/core';

import { Produto } from '@models/produto.model';

@Component({
  selector: 'app-secao-produtos',
  templateUrl: './secao-produtos.component.html',
  styleUrls: ['./secao-produtos.component.scss']
})
export class SecaoProdutosComponent implements OnInit {
  constructor() {}

  @Input()
  titulo: string;

  @Input()
  listaProdutos: Produto[];

  ngOnInit() {}
}
