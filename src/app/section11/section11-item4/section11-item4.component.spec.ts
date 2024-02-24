import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section11Item4Component } from './section11-item4.component';

describe('Section11Item4Component', () => {
  let component: Section11Item4Component;
  let fixture: ComponentFixture<Section11Item4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section11Item4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section11Item4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
