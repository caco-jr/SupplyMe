import { Component, OnInit } from '@angular/core';

import { AppService } from 'app/app.service';
import { Produto } from '@models/produto.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private appService: AppService) {}

  count = 0;

  ngOnInit() {
    if (this.appService.getProductCart()) {
      this.count = this.appService.getProductCart().length;
    }

    this.appService.emitProductCart.subscribe((data: Produto[]) => {
      this.count = data.length;
    });
  }
}
