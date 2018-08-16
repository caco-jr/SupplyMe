import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  produtos = [
    {
      name: 'teste',
      images: [
        'https://http2.mlstatic.com/D_Q_NP_727127-MLB27245398341_042018-AB.webp'
      ],
      gtin14: '',
      brand_name: 'Ardidas',
      size: 'Vermelho'
    },
    {
      name: 'Xablau',
      images: [
        'https://http2.mlstatic.com/D_Q_NP_727127-MLB27245398341_042018-AB.webp'
      ],
      gtin14: '',
      brand_name: 'Ardidas',
      size: 'Amarelo'
    },
    {
      name: 'haha',
      images: [
        'https://http2.mlstatic.com/D_Q_NP_727127-MLB27245398341_042018-AB.webp'
      ],
      gtin14: '',
      brand_name: 'Ardidas',
      size: 'Roxo'
    },
    {
      name: 'Uhuul',
      images: [
        'https://http2.mlstatic.com/D_Q_NP_727127-MLB27245398341_042018-AB.webp'
      ],
      gtin14: '',
      brand_name: 'Ardidas',
      size: 'Verde'
    },
    {
      name: 'Xablau',
      images: [
        'https://http2.mlstatic.com/D_Q_NP_727127-MLB27245398341_042018-AB.webp'
      ],
      gtin14: '',
      brand_name: 'Ardidas',
      size: 'Amarelo'
    },
    {
      name: 'haha',
      images: [
        'https://http2.mlstatic.com/D_Q_NP_727127-MLB27245398341_042018-AB.webp'
      ],
      gtin14: '',
      brand_name: 'Ardidas',
      size: 'Roxo'
    },
    {
      name: 'Uhuul',
      images: [
        'https://http2.mlstatic.com/D_Q_NP_727127-MLB27245398341_042018-AB.webp'
      ],
      gtin14: '',
      brand_name: 'Ardidas',
      size: 'Verde'
    },
    {
      name: 'Xablau',
      images: [
        'https://http2.mlstatic.com/D_Q_NP_727127-MLB27245398341_042018-AB.webp'
      ],
      gtin14: '',
      brand_name: 'Ardidas',
      size: 'Amarelo'
    },
    {
      name: 'haha',
      images: [
        'https://http2.mlstatic.com/D_Q_NP_727127-MLB27245398341_042018-AB.webp'
      ],
      gtin14: '',
      brand_name: 'Ardidas',
      size: 'Roxo'
    },
    {
      name: 'Uhuul',
      images: [
        'https://http2.mlstatic.com/D_Q_NP_727127-MLB27245398341_042018-AB.webp'
      ],
      gtin14: '',
      brand_name: 'Ardidas',
      size: 'Verde'
    }
  ];

  ngOnInit() {}
}
