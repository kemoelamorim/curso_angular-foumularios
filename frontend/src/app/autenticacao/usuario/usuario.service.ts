import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode'
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});
  constructor(private tokenSevice: TokenService) {
    if(this.tokenSevice.possuiToken()){
      this.decodificaJWT();
    }
  }
  private decodificaJWT(){
    const token = this.tokenSevice.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario(){
    return this.usuarioSubject.asObservable();
  }
  salvaToken(token: string){
    this.tokenSevice.salvaToken(token)
    this.decodificaJWT()
  }
  logout(){
    this.tokenSevice.excluiToken()
    this.usuarioSubject.next({})
  }
  estaLogado(){
    return this.tokenSevice.possuiToken()
  }
}
