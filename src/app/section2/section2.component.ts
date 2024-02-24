import { Component } from '@angular/core';
import {Section2ItemComponent} from "./section2-item/section2-item.component";

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [Section2ItemComponent],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss'
})
export class Section2Component {

}
