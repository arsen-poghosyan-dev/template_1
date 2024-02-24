import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section7-item5',
  standalone: true,
  imports: [],
  templateUrl: './section7-item5.component.html',
  styleUrl: './section7-item5.component.scss'
})
export class Section7Item5Component {
  @Input()
  titlespan: string = ""

  @Input()
  titlep: string = ""

  @Input()
  titlep1: string = ""
}
