import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoProdutosComponent } from './secao-produtos.component';

describe('SecaoProdutosComponent', () => {
  let component: SecaoProdutosComponent;
  let fixture: ComponentFixture<SecaoProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
