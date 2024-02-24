import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section8Item1Component } from './section8-item1.component';

describe('Section8Item1Component', () => {
  let component: Section8Item1Component;
  let fixture: ComponentFixture<Section8Item1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section8Item1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section8Item1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
