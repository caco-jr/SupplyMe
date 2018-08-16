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
      name: 'Placa de panel de lanterna noturna',
      images: [
        'https://http2.mlstatic.com/cabo-flex-power-volume-c2004-c1904-sony-xperia-m-D_NQ_NP_766888-MLB26395250123_112017-F.webp'
      ],
      gtin14: '',
      brand_name: 'KWAS',
      size: 'Vermelho'
    },
    {
      name: 'SUPER COLA',
      images: [
        'https://http2.mlstatic.com/cola-adesiva-multiuso-y7000-15ml-reparo-de-celulares-D_NQ_NP_643631-MLB27829656584_072018-F.webp'
      ],
      gtin14: '',
      brand_name: 'SUPERFORTE',
      size: 'Amarelo'
    },
    {
      name: 'CARREGADOR SOLAR',
      images: [
        'https://http2.mlstatic.com/carregador-solar-a-prova-dagua-celular-tablet-gps-preto-D_NQ_NP_778393-MLB25991359759_092017-F.webp'
      ],
      gtin14: '',
      brand_name: 'DAZZ',
      size: 'Roxo'
    },
    {
      name: 'CARREGADOR SEM FIO ',
      images: [
        'https://http2.mlstatic.com/carregador-sem-fio-charger-wirelless-receptor-android-qi-D_NQ_NP_788857-MLB27543059416_062018-F.webp'
      ],
      gtin14: '',
      brand_name: 'SAMSUNG',
      size: 'Verde'
    },
    {
      name: 'Cigarro Eletronico',
      images: [
        'https://http2.mlstatic.com/vaporizador-pen22-original-lacrado-promoco-frete-gratis-D_NQ_NP_682651-MLB27871870764_072018-F.webp'
      ],
      gtin14: '',
      brand_name: 'PEN22',
      size: 'Amarelo'
    },
    {
      name: 'RASPBERRY LCD 35',
      images: [
        'https://http2.mlstatic.com/raspberry-tela-lcd-35-touch-pi2-pi3-tft-pi-2-e-3-caneta-D_NQ_NP_979275-MLB27752892684_072018-F.webp'
      ],
      gtin14: '',
      brand_name: 'RASPBERRY',
      size: 'Roxo'
    },
    {
      name: 'FONE DE OUVIDO ORIGINAL',
      images: [
        'https://http2.mlstatic.com/fone-ouvido-100-original-samsung-galaxy-s7-6-note-edge-gran-D_NQ_NP_259111-MLB20496551607_112015-F.webp'
      ],
      gtin14: '',
      brand_name: 'SAMSUNG ',
      size: 'Verde'
    },
    {
      name: 'SAMSUNG CARREGADOR DE CELULAR',
      images: [
        'https://http2.mlstatic.com/carregador-celular-samsung-s5-s6-s7-j5-j7-D_NQ_NP_932454-MLB26994924790_032018-F.webp'
      ],
      gtin14: '',
      brand_name: 'SAMSUNG',
      size: 'BRANCO'
    },
    {
      name: 'CAIXA DE SOM PORTATIL',
      images: [
        'https://http2.mlstatic.com/caixa-som-usb-portatil-500w-pc-notebook-celular-D_NQ_NP_600075-MLB27220508865_042018-F.webp'
      ],
      gtin14: '',
      brand_name: 'Uealiz Eletronic',
      size: 'Roxo'
    },
    {
      name: 'KIT DE JOGO',
      images: [
        'https://http2.mlstatic.com/p42-kit-jogo-2-prateleiras-mdf-7070x15cm-suporte-invisivel-D_NQ_NP_830225-MLB25402305803_022017-F.webp'
      ],
      gtin14: '',
      brand_name: 'CASAS BANHIA',
      size: 'Verde'
    }
  ];

  ngOnInit() {}
}
