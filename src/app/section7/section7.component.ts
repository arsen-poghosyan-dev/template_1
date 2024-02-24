import { Component } from '@angular/core';
import {Section7Item1Component} from "./section7-item1/section7-item1.component";
import {Section7Item2Component} from "./section7-item2/section7-item2.component";
import {Section7Item3Component} from "./section7-item3/section7-item3.component";
import {Section7Item4Component} from "./section7-item4/section7-item4.component";
import {Section7Item5Component} from "./section7-item5/section7-item5.component";

@Component({
  selector: 'app-section7',
  standalone: true,
  imports: [
    Section7Item1Component,
    Section7Item2Component,
    Section7Item3Component,
    Section7Item4Component,
    Section7Item5Component
  ],
  templateUrl: './section7.component.html',
  styleUrl: './section7.component.scss'
})
export class Section7Component {

}
