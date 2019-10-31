import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService} from './../../../apiService.service';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PanierComponent } from './panier/panier.component';
import { DetailsArticleModule } from './details-article/details-article.module';


const routes: Routes = [
  {
    path: '',
    component: CatalogueComponent,
  },
  { path: 'detail/:id',
  loadChildren: () => import('./details-article/details-article.module').then(m => m.DetailsArticleModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    HttpClientModule],
    providers: [ApiServiceService],
  exports: [RouterModule]
})
export class CatalogueComponentRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/