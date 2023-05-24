import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatacoaPageTwoOneComponent } from './tatacoa-page-two-one.component';

describe('TatacoaPageTwoOneComponent', () => {
  let component: TatacoaPageTwoOneComponent;
  let fixture: ComponentFixture<TatacoaPageTwoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TatacoaPageTwoOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TatacoaPageTwoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
