import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetransportadoraComponent } from './updatetransportadora.component';

describe('UpdatetransportadoraComponent', () => {
  let component: UpdatetransportadoraComponent;
  let fixture: ComponentFixture<UpdatetransportadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetransportadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetransportadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
