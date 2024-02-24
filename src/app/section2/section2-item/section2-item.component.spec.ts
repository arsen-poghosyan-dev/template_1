import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2ItemComponent } from './section2-item.component';

describe('Section2ItemComponent', () => {
  let component: Section2ItemComponent;
  let fixture: ComponentFixture<Section2ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section2ItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section2ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
