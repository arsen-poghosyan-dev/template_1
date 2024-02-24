import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section7Item1Component } from './section7-item1.component';

describe('Section7Item1Component', () => {
  let component: Section7Item1Component;
  let fixture: ComponentFixture<Section7Item1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section7Item1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section7Item1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
