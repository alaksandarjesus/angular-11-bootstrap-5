import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLeftCardComponent } from './product-left-card.component';

describe('ProductLeftCardComponent', () => {
  let component: ProductLeftCardComponent;
  let fixture: ComponentFixture<ProductLeftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLeftCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLeftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
