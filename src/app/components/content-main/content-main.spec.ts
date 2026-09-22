import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentMain } from './content-main';

describe('ContentMain', () => {
  let component: ContentMain;
  let fixture: ComponentFixture<ContentMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentMain],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
