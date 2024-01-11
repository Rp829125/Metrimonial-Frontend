import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrideComponent } from './bride.component';

describe('BrideComponent', () => {
  let component: BrideComponent;
  let fixture: ComponentFixture<BrideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrideComponent]
    });
    fixture = TestBed.createComponent(BrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
