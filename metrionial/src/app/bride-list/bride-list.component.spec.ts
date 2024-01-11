import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrideListComponent } from './bride-list.component';

describe('BrideListComponent', () => {
  let component: BrideListComponent;
  let fixture: ComponentFixture<BrideListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrideListComponent]
    });
    fixture = TestBed.createComponent(BrideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
