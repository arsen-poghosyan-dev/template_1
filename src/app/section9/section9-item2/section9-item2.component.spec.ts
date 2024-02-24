import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section9Item2Component } from './section9-item2.component';

describe('Section9Item2Component', () => {
  let component: Section9Item2Component;
  let fixture: ComponentFixture<Section9Item2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section9Item2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section9Item2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
