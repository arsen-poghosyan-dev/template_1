import { Component } from '@angular/core';

@Component({
  selector: 'app-abc',
  standalone: true,
  imports: [],
  templateUrl: './abc.component.html',
  styleUrl: './abc.component.scss'
})
export class AbcComponent {
  title: string = 'ABC';


  plus(x: number, y: number) {
    return x + y
  }

}
