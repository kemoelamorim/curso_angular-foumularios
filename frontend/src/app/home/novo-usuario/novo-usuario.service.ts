import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {
  private readonly API = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario){
    const url = `${this.API}/user/signup`
    return this.httpClient.post(url, novoUsuario)
  }

  verificaUsuarioExistente(usuario: string){
    const url = `${this.API}/user/exists/${usuario}`
    return this.httpClient.get(url)
  }
}
