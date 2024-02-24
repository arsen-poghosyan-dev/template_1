import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section10Item3Component } from './section10-item3.component';

describe('Section10Item3Component', () => {
  let component: Section10Item3Component;
  let fixture: ComponentFixture<Section10Item3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section10Item3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section10Item3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
