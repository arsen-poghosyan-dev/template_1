import { Component } from '@angular/core';
import {Section9Item1Component} from "./section9-item1/section9-item1.component";
import {Section9Item2Component} from "./section9-item2/section9-item2.component";

@Component({
  selector: 'app-section9',
  standalone: true,
  imports: [
    Section9Item1Component,
    Section9Item2Component
  ],
  templateUrl: './section9.component.html',
  styleUrl: './section9.component.scss'
})
export class Section9Component {

}
