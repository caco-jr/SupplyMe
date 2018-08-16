import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-ean',
  templateUrl: './cadastro-ean.component.html',
  styleUrls: ['./cadastro-ean.component.scss']
})
export class CadastroEanComponent implements OnInit {
  isEAN = false;

  constructor() {}

  receiverFeedback(response) {
    this.isEAN = response;
  }

  ngOnInit() {}
}
