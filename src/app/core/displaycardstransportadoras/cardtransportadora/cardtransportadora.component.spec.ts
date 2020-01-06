import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtransportadoraComponent } from './cardtransportadora.component';

describe('CardtransportadoraComponent', () => {
  let component: CardtransportadoraComponent;
  let fixture: ComponentFixture<CardtransportadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardtransportadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardtransportadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
