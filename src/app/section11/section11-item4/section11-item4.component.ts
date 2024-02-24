import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section11-item4',
  standalone: true,
  imports: [],
  templateUrl: './section11-item4.component.html',
  styleUrl: './section11-item4.component.scss'
})
export class Section11Item4Component {

  @Input()
  title: string = ""

}
