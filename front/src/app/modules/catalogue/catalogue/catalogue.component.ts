import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable  } from 'rxjs';
import { Article} from '../../../models/article';
import { AddArticle } from '../../../actions/addArticle';
import { DelArticle } from '../../../actions/delArticle';
import { CatalogueService} from './catalogueService'



@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent  {

  public produits : Article[] = [];
  private produitsFiltres : Article[] = [];


  ref: string = 'Angular';
  produit : string = '123456';
  prix : number = 200.0;
  qte : number = 2;

  
 
  mode: any;


  constructor(public CatalogueService : CatalogueService, private store : Store) { }



  onClick(ref, produit,prix,qte) {
    console.log("CLICK ON ADD BUTTON")
    this.ref=ref;
    this.produit=produit;
    this.prix=prix;
    this.qte=qte;
    this.addArticle(this.ref,this.produit,this.prix,this.qte);
  }

  onDelClick() {
    console.log("CLICK ON DEL BUTTON")
    this.delArticle (this.ref,this.produit,this.prix,this.qte);
  }

  addArticle(ref,produit,prix,qte) { this.store.dispatch(new AddArticle({ ref,produit,prix,qte})); }

  delArticle(ref,produit,prix,qte) { this.store.dispatch(new DelArticle({ ref,produit,prix,qte})); }


  ngOnInit() {
    this.CatalogueService.getProduits().subscribe(response => {
        this.produits = response;
        this.produitsFiltres = response; 
        console.log(this.produits);
      }
    ); 
  }

}


