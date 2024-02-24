import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section7-item4',
  standalone: true,
  imports: [],
  templateUrl: './section7-item4.component.html',
  styleUrl: './section7-item4.component.scss'
})
export class Section7Item4Component {
  @Input()
  titlespan: string = ""

  @Input()
  titlep: string = ""

  @Input()
  titlep1: string = ""
}
