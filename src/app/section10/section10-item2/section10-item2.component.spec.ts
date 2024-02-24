import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section10Item2Component } from './section10-item2.component';

describe('Section10Item2Component', () => {
  let component: Section10Item2Component;
  let fixture: ComponentFixture<Section10Item2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section10Item2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section10Item2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
