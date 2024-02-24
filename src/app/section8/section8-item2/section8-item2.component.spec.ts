import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section8Item2Component } from './section8-item2.component';

describe('Section8Item2Component', () => {
  let component: Section8Item2Component;
  let fixture: ComponentFixture<Section8Item2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section8Item2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section8Item2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
