import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClothingComponent } from './admin-clothing.component';

describe('AdminClothingComponent', () => {
  let component: AdminClothingComponent;
  let fixture: ComponentFixture<AdminClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminClothingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
