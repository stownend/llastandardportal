import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyItNowComponent } from './buy-it-now.component';

describe('BuyItNowComponent', () => {
  let component: BuyItNowComponent;
  let fixture: ComponentFixture<BuyItNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyItNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyItNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
