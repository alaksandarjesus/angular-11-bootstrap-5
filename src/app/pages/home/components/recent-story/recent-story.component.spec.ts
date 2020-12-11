import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentStoryComponent } from './recent-story.component';

describe('RecentStoryComponent', () => {
  let component: RecentStoryComponent;
  let fixture: ComponentFixture<RecentStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
