import { Component} from '@angular/core';
import {Section8Item1Component} from "./section8-item1/section8-item1.component";
import {Section8Item2Component} from "./section8-item2/section8-item2.component";
import {Section8Item3Component} from "./section8-item3/section8-item3.component";

@Component({
  selector: 'app-section8',
  standalone: true,
  imports: [
    Section8Item1Component,
    Section8Item2Component,
    Section8Item3Component
  ],
  templateUrl: './section8.component.html',
  styleUrl: './section8.component.scss'
})
export class Section8Component {

}
