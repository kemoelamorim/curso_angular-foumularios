import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NovoUsuario } from './novo-usuario';
const API = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {
  constructor(private httpClient: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario){
    const url = `${API}/user/signup`
    return this.httpClient.post(url, novoUsuario)
  }

  verificaUsuarioExistente(usuario: string){
    const url = `${API}/user/exists/${usuario}`
    return this.httpClient.get(url)
  }
}
