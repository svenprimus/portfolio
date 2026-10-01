import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileFigure } from './profile-figure';

describe('ProfileFigure', () => {
  let component: ProfileFigure;
  let fixture: ComponentFixture<ProfileFigure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFigure],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileFigure);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
