import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) { }
  private readonly API = 'http://localhost:3000'
  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>>{
    const url = `${this.API}/user/login`
    return this.httpClient
      .post(url, 
        {
          userName: usuario, 
          password: senha
        }, 
        {observe: 'response'}
      ).pipe(
        tap((response)=>{
          const authToken = response.headers.get('x-access-token') ?? '';
          this.usuarioService.salvaToken(authToken)
        })
      )
  }
}
