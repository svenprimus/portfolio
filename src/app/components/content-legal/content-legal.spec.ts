import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentLegal } from './content-legal';

describe('ContentLegal', () => {
  let component: ContentLegal;
  let fixture: ComponentFixture<ContentLegal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentLegal],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentLegal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
