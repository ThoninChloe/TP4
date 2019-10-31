import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'
import { ApiServiceService} from '../../../../apiService.service'
import { Observable  } from 'rxjs';
import { Article } from 'src/app/models/article';



@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css'],
})
export class DetailsArticleComponent implements OnInit {
  id : string;
  cat : Observable<Article[]>;
  articleTab : Article[];
  catObservable : Observable<Article[]>;

  constructor(private route:ActivatedRoute,private apiServiceService : ApiServiceService,private router:Router) {
    this.cat = apiServiceService.getCatalogue();
    this.id = this.route.snapshot.params.id; 
    this.catObservable = this.apiServiceService.getProduct(this.id);

   }

   
  ngOnInit() {
    this.cat.subscribe(value => this.articleTab = value);
    this.id = this.route.snapshot.params.id; 
    this.catObservable = this.apiServiceService.getProduct(this.id);

  }

}
