import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CintactFormComponent } from './cintact-form.component';

describe('CintactFormComponent', () => {
  let component: CintactFormComponent;
  let fixture: ComponentFixture<CintactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CintactFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CintactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
