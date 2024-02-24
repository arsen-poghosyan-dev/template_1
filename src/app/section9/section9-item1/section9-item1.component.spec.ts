import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section9Item1Component } from './section9-item1.component';

describe('Section9Item1Component', () => {
  let component: Section9Item1Component;
  let fixture: ComponentFixture<Section9Item1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section9Item1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section9Item1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
