import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section10-item3',
  standalone: true,
  imports: [],
  templateUrl: './section10-item3.component.html',
  styleUrl: './section10-item3.component.scss'
})
export class Section10Item3Component {

  @Input()
  title: string = ""

  @Input()
  titlea: string = ""

  @Input()
  titlea1: string = ""

  @Input()
  title2: string = ""

  @Input()
  title3: string = ""

  @Input()
  title4: string = ""
}
