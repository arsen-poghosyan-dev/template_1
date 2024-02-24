import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section4Item1Component } from './section4-item1.component';

describe('Section4Item1Component', () => {
  let component: Section4Item1Component;
  let fixture: ComponentFixture<Section4Item1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section4Item1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section4Item1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
