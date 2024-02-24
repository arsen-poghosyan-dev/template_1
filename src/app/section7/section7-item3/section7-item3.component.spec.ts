import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section7Item3Component } from './section7-item3.component';

describe('Section7Item3Component', () => {
  let component: Section7Item3Component;
  let fixture: ComponentFixture<Section7Item3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section7Item3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section7Item3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
