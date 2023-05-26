import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDescriptionPageComponent } from './route-description-page.component';

describe('RouteDescriptionPageComponent', () => {
  let component: RouteDescriptionPageComponent;
  let fixture: ComponentFixture<RouteDescriptionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteDescriptionPageComponent]
    });
    fixture = TestBed.createComponent(RouteDescriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
