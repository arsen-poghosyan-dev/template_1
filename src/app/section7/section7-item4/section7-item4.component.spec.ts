import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section7Item4Component } from './section7-item4.component';

describe('Section7Item4Component', () => {
  let component: Section7Item4Component;
  let fixture: ComponentFixture<Section7Item4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section7Item4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section7Item4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
