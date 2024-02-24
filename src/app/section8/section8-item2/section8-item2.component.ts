import {Component, Input} from '@angular/core';
import {Section8Item1Component} from "../section8-item1/section8-item1.component";

@Component({
  selector: 'app-section8-item2',
  standalone: true,
    imports: [
        Section8Item1Component
    ],
  templateUrl: './section8-item2.component.html',
  styleUrl: './section8-item2.component.scss'
})
export class Section8Item2Component {
  @Input()
  titlespan: string = ""

  @Input()
  titlea: string = ""

  @Input()
  titlea1: string = ""

  @Input()
  titlea2: string = ""
}
