import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section10-item4',
  standalone: true,
  imports: [],
  templateUrl: './section10-item4.component.html',
  styleUrl: './section10-item4.component.scss'
})
export class Section10Item4Component {

  @Input()
  title: string = ""

  @Input()
  titlea: string = ""

  @Input()
  titlea1: string = ""

  @Input()
  title2: string = ""

}
