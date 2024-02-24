import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section10Item1Component } from './section10-item1.component';

describe('Section10Item1Component', () => {
  let component: Section10Item1Component;
  let fixture: ComponentFixture<Section10Item1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section10Item1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section10Item1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
