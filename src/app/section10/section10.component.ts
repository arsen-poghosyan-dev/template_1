import { Component } from '@angular/core';
import {Section10Item1Component} from "./section10-item1/section10-item1.component";
import {Section10Item2Component} from "./section10-item2/section10-item2.component";
import {Section10Item3Component} from "./section10-item3/section10-item3.component";
import {Section10Item4Component} from "./section10-item4/section10-item4.component";

@Component({
  selector: 'app-section10',
  standalone: true,
  imports: [
    Section10Item1Component,
    Section10Item2Component,
    Section10Item3Component,
    Section10Item4Component
  ],
  templateUrl: './section10.component.html',
  styleUrl: './section10.component.scss'
})
export class Section10Component {

}
