import { Component, Input, } from '@angular/core';
import { Animais } from '../animais';

@Component({
  selector: 'app-grade-fotos-animais',
  templateUrl: './grade-fotos-animais.component.html',
  styleUrls: ['./grade-fotos-animais.component.scss']
})
export class GradeFotosAnimaisComponent {
  @Input() animais!: Animais;
 
  constructor() { 
  }


}
