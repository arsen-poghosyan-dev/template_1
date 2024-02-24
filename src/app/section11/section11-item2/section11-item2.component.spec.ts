import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section11Item2Component } from './section11-item2.component';

describe('Section11Item2Component', () => {
  let component: Section11Item2Component;
  let fixture: ComponentFixture<Section11Item2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section11Item2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section11Item2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
