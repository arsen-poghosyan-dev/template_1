import { Component } from '@angular/core';
import {Section6Item1Component} from "./section6-item1/section6-item1.component";


@Component({
  selector: 'app-section6',
  standalone: true,
  imports: [
    Section6Item1Component,
  ],
  templateUrl: './section6.component.html',
  styleUrl: './section6.component.scss'
})
export class Section6Component {

}
