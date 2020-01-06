import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportadoraformComponent } from './transportadoraform.component';

describe('TransportadoraformComponent', () => {
  let component: TransportadoraformComponent;
  let fixture: ComponentFixture<TransportadoraformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportadoraformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportadoraformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
