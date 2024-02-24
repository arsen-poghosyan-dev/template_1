import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section10-item1',
  standalone: true,
  imports: [],
  templateUrl: './section10-item1.component.html',
  styleUrl: './section10-item1.component.scss'
})
export class Section10Item1Component {
  @Input()
  title: string = ""

  @Input()
  titlespan: string = ""

  @Input()
  titlespan2: string = ""
}
