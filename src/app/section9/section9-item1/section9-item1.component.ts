import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section9-item1',
  standalone: true,
  imports: [],
  templateUrl: './section9-item1.component.html',
  styleUrl: './section9-item1.component.scss'
})
export class Section9Item1Component {
  @Input()
  title: string = ""

  @Input()
  titlespan: string = ""

  @Input()
  input: string = ""

  @Input()
  button: string = ""
}
