import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingIllustrationComponent } from './landing-illustration.component';

describe('LandingIllustrationComponent', () => {
  let component: LandingIllustrationComponent;
  let fixture: ComponentFixture<LandingIllustrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingIllustrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
