import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeSectionComponent } from './receipe-section.component';

describe('ReceipeSectionComponent', () => {
  let component: ReceipeSectionComponent;
  let fixture: ComponentFixture<ReceipeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
