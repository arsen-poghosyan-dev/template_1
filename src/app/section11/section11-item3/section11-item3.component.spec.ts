import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section11Item3Component } from './section11-item3.component';

describe('Section11Item3Component', () => {
  let component: Section11Item3Component;
  let fixture: ComponentFixture<Section11Item3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section11Item3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section11Item3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
