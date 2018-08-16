import { Component, OnInit, Input } from '@angular/core';

import { Produto } from '@models/produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  constructor() {}

  @Input()
  produto: Produto;

  name;
  imgURL;
  brandName;
  color;

  ngOnInit() {
    this.name = this.produto.name;
    this.imgURL = this.produto.images[0];
    this.brandName = this.produto.brand_name;
    this.color = this.produto.size;
  }
}
