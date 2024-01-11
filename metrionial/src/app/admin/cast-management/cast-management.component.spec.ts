import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastManagementComponent } from './cast-management.component';

describe('CastManagementComponent', () => {
  let component: CastManagementComponent;
  let fixture: ComponentFixture<CastManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CastManagementComponent]
    });
    fixture = TestBed.createComponent(CastManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
