import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-section4-item1',
  standalone: true,
  imports: [],
  templateUrl: './section4-item1.component.html',
  styleUrl: './section4-item1.component.scss'
})
export class Section4Item1Component {
  @Input()
  title: string = ''

  @Input()
  h3title: string = ''

  @Input()
  ptitle: string  = ''

  @Input()
  designedh3: string = ''

  @Input()
  plasteredp: string = ''

  @Input()
  buttonmore: string = ''

  @Input()
  img: string = ''

}
