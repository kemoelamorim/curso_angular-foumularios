import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { Comentarios } from './comentarios';
import { ComentariosService } from './comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {
  
  @Input() id! : number;

  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;
  constructor(private comentariosService: ComentariosService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.comentarios$ = this.comentariosService.buscaComentario(this.id)
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength]
    })
  }
  gravar(): void{
    const comentario = this.comentarioForm.get('comentario')?.value ?? ''
    this.comentarios$ = this.comentariosService.incluiComentario(this.id, comentario).pipe(switchMap(()=>{
      return this.comentariosService.buscaComentario(this.id)
    }), tap(() => {
      this.comentarioForm.reset()
      alert('Salvo comentário.')
    }))
  }
}
