import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section2-item',
  standalone: true,
  imports: [],
  templateUrl: './section2-item.component.html',
  styleUrl: './section2-item.component.scss'
})
export class Section2ItemComponent {
  @Input()
  title: string = ''

  @Input()
  description: string = ''

}
