import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteconfimationmodalComponent } from './deleteconfimationmodal.component';

describe('DeleteconfimationmodalComponent', () => {
  let component: DeleteconfimationmodalComponent;
  let fixture: ComponentFixture<DeleteconfimationmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteconfimationmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteconfimationmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
