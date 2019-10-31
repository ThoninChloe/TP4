import { Component, OnInit } from '@angular/core';
import { Article } from '../../../models/article';
import { Observable,pipe } from 'rxjs';
import {Store} from '@ngxs/store';





@Component({
  selector: 'app-liste-panier',
  templateUrl: './liste-panier.component.html',
    styleUrls: ['./liste-panier.component.css'],
})
export class ListePanierComponent implements OnInit {
  nbProducts: number;
  panier: Observable<Article>;

  constructor(private store: Store) { 
    this.panier = this.store.select(state => state.panier.panier);

  }
  ngOnInit() {
  }

}
