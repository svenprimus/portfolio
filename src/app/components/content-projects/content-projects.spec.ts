import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentProjects } from './content-projects';

describe('ContentProjects', () => {
  let component: ContentProjects;
  let fixture: ComponentFixture<ContentProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentProjects],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
