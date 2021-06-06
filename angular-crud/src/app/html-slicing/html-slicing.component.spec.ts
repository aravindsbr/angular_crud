import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLSlicingComponent } from './html-slicing.component';

describe('HTMLSlicingComponent', () => {
  let component: HTMLSlicingComponent;
  let fixture: ComponentFixture<HTMLSlicingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTMLSlicingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTMLSlicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
