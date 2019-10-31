import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogueComponentRoutingModule } from './catalogue-routine.module';
import { ApiServiceService} from './../../../apiService.service';
import { FormsModule } from '@angular/forms';

import { DetailsArticleComponent } from './details-article/details-article.component';


@NgModule({
  declarations: [ CatalogueComponent,
                ],
  imports: [
    CommonModule,
    CatalogueComponentRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ApiServiceService],

  
})
export class CatalogueModule { }
