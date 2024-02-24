import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section3-item1',
  standalone: true,
  imports: [],
  templateUrl: './section3-item1.component.html',
  styleUrl: './section3-item1.component.scss'
})
export class Section3Item1Component {
  @Input()
  title: string = ''

  @Input()
  img: string = ''

  @Input()
  description: string = ''

}
