import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { UserModel } from '@models/user.model';
import { Produto } from '@models/produto.model';

@Injectable()
export class AppService {
  private api = `https://supply-me-api.herokuapp.com`;

  private userData: UserModel;
  // Para capturar mudanças do usuário
  public emitUser = new EventEmitter();

  private productCart: Produto[] = [];
  public emitProductCart = new EventEmitter();

  constructor(private http: HttpClient) {}

  // Pega as informações do usuário com base no meli
  public getEAN(ean: string) {
    return this.http.get(`${this.api}/${ean}`).subscribe(
      data => {
        console.log('====================================');
        console.log(data);
        console.log('====================================');
      },
      error => {
        console.log(error);
      }
    );
  }

  public setUser(data: UserModel) {
    // Guarda as Informações no cache do navegador.
    localStorage.setItem('userData', JSON.stringify(data));
    this.userData = data;
  }

  public getUser(): UserModel {
    return this.userData || JSON.parse(localStorage.getItem('userData'));
  }

  public getProductCart() {
    const jsonProductCart = JSON.parse(localStorage.getItem('cartItems'));

    if (this.productCart.length) {
      return this.productCart;
    } else if (jsonProductCart) {
      this.productCart = jsonProductCart;

      return jsonProductCart;
    }

    return [];
  }

  public setProductCart(product: Produto) {
    this.productCart = [...this.productCart, product];
    this.emitProductCart.emit(this.productCart);

    // Guarda as Informações no cache do navegador.
    localStorage.setItem('cartItems', JSON.stringify(this.productCart));
  }
}
