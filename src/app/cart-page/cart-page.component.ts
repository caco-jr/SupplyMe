import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { Produto } from '@models/produto.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  produtos: Produto[];

  constructor(private appService: AppService) {}

  pagar() {
    const link =
      'https://www.mercadopago.com/mlb/checkout/pay?pref_id=166987208-a0abaa76-351c-4140-90f6-5580bd1ef656';

    location.href = link;
  }

  ngOnInit() {
    this.produtos = this.appService.getProductCart();
  }
}
