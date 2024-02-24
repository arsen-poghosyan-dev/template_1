import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3Item1Component } from './section3-item1.component';

describe('Section3Item1Component', () => {
  let component: Section3Item1Component;
  let fixture: ComponentFixture<Section3Item1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section3Item1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section3Item1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
