import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section11-item1',
  standalone: true,
  imports: [],
  templateUrl: './section11-item1.component.html',
  styleUrl: './section11-item1.component.scss'
})
export class Section11Item1Component {

  @Input()
  title: string = ""

  @Input()
  title1: string = ""

}
