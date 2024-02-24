import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section6-item1',
  standalone: true,
  imports: [],
  templateUrl: './section6-item1.component.html',
  styleUrl: './section6-item1.component.scss'
})
export class Section6Item1Component {
  @Input()
  title: string = ""

  @Input()
  titlep: string = ""

  @Input()
  titleh4: string = ""

  @Input()
  profession: string = ""

  @Input()
  button: string = ""

}
