import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiligionManagementComponent } from './riligion-management.component';

describe('RiligionManagementComponent', () => {
  let component: RiligionManagementComponent;
  let fixture: ComponentFixture<RiligionManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiligionManagementComponent]
    });
    fixture = TestBed.createComponent(RiligionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
