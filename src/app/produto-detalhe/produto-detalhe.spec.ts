import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDetalhe } from './produto-detalhe';

describe('ProdutoDetalhe', () => {
  let component: ProdutoDetalhe;
  let fixture: ComponentFixture<ProdutoDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoDetalhe],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoDetalhe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
