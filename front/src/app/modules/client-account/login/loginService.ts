import { Injectable } from '@angular/core';
import { Utilisateur } from '../../../models/user';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  
  constructor(private http: HttpClient) {
  }
    
  connexion( login : string, mdp : string,) {
    return this.http.post<Utilisateur>(environment.connexion , {login, mdp });
    
  }


}
