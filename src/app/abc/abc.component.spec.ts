import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcComponent } from './abc.component';
import {AppComponent} from "../app.component";

describe('AbcComponent', () => {
  let component: AbcComponent;
  let fixture: ComponentFixture<AbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should h1 prop title', () => {
    const fixture = TestBed.createComponent(AbcComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('ABC');
  });

  it('should method plus', () => {
    expect(component.plus(1, 3)).toEqual( 4);
  });


});
