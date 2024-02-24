import { Component } from '@angular/core';
import {Section10Item1Component} from "../section10/section10-item1/section10-item1.component";
import {Section10Item2Component} from "../section10/section10-item2/section10-item2.component";
import {Section10Item3Component} from "../section10/section10-item3/section10-item3.component";
import {Section10Item4Component} from "../section10/section10-item4/section10-item4.component";
import {Section11Item1Component} from "./section11-item1/section11-item1.component";
import {Section11Item2Component} from "./section11-item2/section11-item2.component";
import {Section11Item3Component} from "./section11-item3/section11-item3.component";
import {Section11Item4Component} from "./section11-item4/section11-item4.component";

@Component({
  selector: 'app-section11',
  standalone: true,
  imports: [
    Section10Item1Component,
    Section10Item2Component,
    Section10Item3Component,
    Section10Item4Component,
    Section11Item1Component,
    Section11Item2Component,
    Section11Item3Component,
    Section11Item4Component
  ],
  templateUrl: './section11.component.html',
  styleUrl: './section11.component.scss'
})
export class Section11Component {

}
