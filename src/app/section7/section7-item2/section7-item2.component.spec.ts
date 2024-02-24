import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section7Item2Component } from './section7-item2.component';

describe('Section7Item2Component', () => {
  let component: Section7Item2Component;
  let fixture: ComponentFixture<Section7Item2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section7Item2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section7Item2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
