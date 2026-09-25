import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionTestimonials } from './section-testimonials';

describe('SectionTestimonials', () => {
  let component: SectionTestimonials;
  let fixture: ComponentFixture<SectionTestimonials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTestimonials],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionTestimonials);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
