import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepListingComponent } from './dep-listing.component';

describe('DepListingComponent', () => {
  let component: DepListingComponent;
  let fixture: ComponentFixture<DepListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
