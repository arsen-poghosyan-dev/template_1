import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section7-item2',
  standalone: true,
  imports: [],
  templateUrl: './section7-item2.component.html',
  styleUrl: './section7-item2.component.scss'
})
export class Section7Item2Component {
  @Input()
  title: string = ""

  @Input()
  titleh2: string = ""

  @Input()
  titlep: string = ""

  @Input()
  titlep2: string = ""

  @Input()
  divclor: string = ""

  @Input()
  divclorh5: string = ""

  @Input()
  divclorh51: string = ""

  @Input()
  divclorh52: string = ""

  @Input()
  button: string = ""
}
