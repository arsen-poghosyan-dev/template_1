import { Component } from '@angular/core';
import {Section4Item1Component} from "./section4-item1/section4-item1.component";
import {Section3Item1Component} from "../section3/section3-item1/section3-item1.component";

@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [
    Section4Item1Component,
    Section3Item1Component,
  ],
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.scss'
})
export class Section4Component {

}
