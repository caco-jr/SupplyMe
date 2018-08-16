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
      ]
    },
    {
      name: 'Xablau',
      images: [
        'https://http2.mlstatic.com/D_Q_NP_727127-MLB27245398341_042018-AB.webp'
      ]
    },
    {
      name: 'haha',
      images: [
        'https://http2.mlstatic.com/D_Q_NP_727127-MLB27245398341_042018-AB.webp'
      ]
    },
    {
      name: 'Uhuul',
      images: [
        'https://http2.mlstatic.com/D_Q_NP_727127-MLB27245398341_042018-AB.webp'
      ]
    }
  ];

  ngOnInit() {}
}
