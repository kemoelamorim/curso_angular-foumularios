import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }
  private readonly API = 'http://localhost:3000'
  autenticar(usuario: string, senha: string): Observable<any>{
    const url = `${this.API}/user/login`
    return this.httpClient
      .post(url, 
        {
          userName: usuario, 
          password: senha
        })
  }
}
