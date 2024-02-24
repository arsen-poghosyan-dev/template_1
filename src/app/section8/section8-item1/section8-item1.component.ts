import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section8-item1',
  standalone: true,
  imports: [],
  templateUrl: './section8-item1.component.html',
  styleUrl: './section8-item1.component.scss'
})
export class Section8Item1Component {
  @Input()
  titlespan: string = ""

  @Input()
  titlea: string = ""

  @Input()
  titlea1: string = ""

  @Input()
  titlea2: string = ""
}
