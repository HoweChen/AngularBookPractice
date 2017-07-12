import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeRedditComponent } from './fake-reddit.component';

describe('FakeRedditComponent', () => {
  let component: FakeRedditComponent;
  let fixture: ComponentFixture<FakeRedditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeRedditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
