import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeadphonesComponent } from './admin-headphones.component';

describe('AdminHeadphonesComponent', () => {
  let component: AdminHeadphonesComponent;
  let fixture: ComponentFixture<AdminHeadphonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHeadphonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHeadphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
