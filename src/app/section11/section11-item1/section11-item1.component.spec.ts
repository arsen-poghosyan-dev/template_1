import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section11Item1Component } from './section11-item1.component';

describe('Section11Item1Component', () => {
  let component: Section11Item1Component;
  let fixture: ComponentFixture<Section11Item1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section11Item1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section11Item1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
