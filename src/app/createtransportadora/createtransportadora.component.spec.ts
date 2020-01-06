import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetransportadoraComponent } from './createtransportadora.component';

describe('CreatetransportadoraComponent', () => {
  let component: CreatetransportadoraComponent;
  let fixture: ComponentFixture<CreatetransportadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetransportadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetransportadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
