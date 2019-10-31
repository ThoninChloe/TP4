import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';
import { Article } from './app/models/article';
import { Observable,pipe } from "rxjs";
import { tap,map } from 'rxjs/operators';


@Injectable()
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getCatalogue () : Observable<Article[]> {
    return this.http.get<Article[]> ( environment.urlApiCatalogue).pipe (tap((value) => console.log(value)) );
  }

 
  public getProduct(ref:string) : Observable<Article[]> {
    return  this.http.get<Article[]> (environment.urlApiCatalogue).pipe (map(p => p.filter(pr=>pr.ref == ref)));
 
  }
  
 
}