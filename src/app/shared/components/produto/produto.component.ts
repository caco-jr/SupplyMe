import { Component, OnInit, Input } from '@angular/core';

import { Produto } from '@models/produto.model';
import { AppService } from 'app/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  constructor(
    private appService: AppService,
    private route: Router,
    private activated: ActivatedRoute
  ) {}

  @Input()
  produto: Produto;

  name;
  imgURL;
  brandName;
  color;
  isFinish;

  appendProduct(product) {
    this.appService.setProductCart(product);
  }

  selectProduct(product) {
    localStorage.setItem('selectProduct', JSON.stringify(product));
  }

  ngOnInit() {
    this.name = this.produto.name;
    this.imgURL = this.produto.images[0];
    this.brandName = this.produto.brand_name;
    this.color = this.produto.size;

    this.isFinish = this.route.url === '/cart-page' ? true : false;
  }
}
