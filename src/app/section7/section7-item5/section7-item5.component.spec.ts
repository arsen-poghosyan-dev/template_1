import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section7Item5Component } from './section7-item5.component';

describe('Section7Item5Component', () => {
  let component: Section7Item5Component;
  let fixture: ComponentFixture<Section7Item5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section7Item5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section7Item5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
