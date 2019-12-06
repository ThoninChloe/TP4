import { Injectable } from '@angular/core';
import { Utilisateur } from '../../../models/user';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class InscriptionService {
  
  constructor(private http: HttpClient) {
  }
    
  inscription(nom : string, prenom : string, adresse : string, codePostal : number, ville : string, telephone : string, email : string,
    civilite : string, login : string, mdp : string, mdp2 : string) {
    return this.http.post<Utilisateur>(environment.inscription , { nom, prenom, adresse, codePostal,ville, telephone, email,
      civilite, login, mdp, mdp2 });
    
  }


}
