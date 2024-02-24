import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-section7-item1',
  standalone: true,
  imports: [],
  templateUrl: './section7-item1.component.html',
  styleUrl: './section7-item1.component.scss'
})
export class Section7Item1Component {
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
  button: string = ""
}
