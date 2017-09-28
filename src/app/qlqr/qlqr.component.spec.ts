import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlqrComponent } from './qlqr.component';

describe('QlqrComponent', () => {
  let component: QlqrComponent;
  let fixture: ComponentFixture<QlqrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlqrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
