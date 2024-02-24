import { Component } from '@angular/core';
import {Section3Item1Component} from "./section3-item1/section3-item1.component";

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [Section3Item1Component],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.scss'
})
export class Section3Component {

}
