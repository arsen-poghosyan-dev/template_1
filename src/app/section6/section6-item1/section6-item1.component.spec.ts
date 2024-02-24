import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section6Item1Component } from './section6-item1.component';

describe('Section6Item1Component', () => {
  let component: Section6Item1Component;
  let fixture: ComponentFixture<Section6Item1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section6Item1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section6Item1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
