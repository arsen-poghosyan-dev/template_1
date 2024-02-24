import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section8Item3Component } from './section8-item3.component';

describe('Section8Item3Component', () => {
  let component: Section8Item3Component;
  let fixture: ComponentFixture<Section8Item3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section8Item3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section8Item3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
