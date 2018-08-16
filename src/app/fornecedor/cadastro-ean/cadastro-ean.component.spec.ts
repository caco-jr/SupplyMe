import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEanComponent } from './cadastro-ean.component';

describe('CadastroEanComponent', () => {
  let component: CadastroEanComponent;
  let fixture: ComponentFixture<CadastroEanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroEanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
