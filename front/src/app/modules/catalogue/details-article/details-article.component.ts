import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'
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

  constructor(private route:ActivatedRoute,private router:Router) {
    
    this.id = this.route.snapshot.params.id; 

   }

   
  ngOnInit() {
    this.cat.subscribe(value => this.articleTab = value);
    this.id = this.route.snapshot.params.id; 
  }

}
