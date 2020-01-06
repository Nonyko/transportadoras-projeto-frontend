import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycardstransportadorasComponent } from './displaycardstransportadoras.component';

describe('DisplaycardstransportadorasComponent', () => {
  let component: DisplaycardstransportadorasComponent;
  let fixture: ComponentFixture<DisplaycardstransportadorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaycardstransportadorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycardstransportadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
