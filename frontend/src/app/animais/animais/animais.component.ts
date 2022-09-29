import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss']
})
export class AnimaisComponent implements OnInit {

  private urlOriginal = '';
  
  @Input() descricao = '';
  
  @Input() set url(url: string){
    if(url.startsWith('data')){
      this.urlOriginal = url
    }else{
      this.urlOriginal = `${API}/imgs/${url}`
    }
  }
  
  get url(): string{
    return this.urlOriginal
  }

  constructor() { }

  ngOnInit(): void {
  }

}
