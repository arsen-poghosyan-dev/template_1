import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section10Item4Component } from './section10-item4.component';

describe('Section10Item4Component', () => {
  let component: Section10Item4Component;
  let fixture: ComponentFixture<Section10Item4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section10Item4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section10Item4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
