import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DetailsArticleComponent } from './details-article.component';
import { DetailsRoutingModule } from './details-article-routing.module';
import { ApiServiceService } from 'src/apiService.service';



@NgModule({
  declarations: [DetailsArticleComponent],
  imports: [
    DetailsRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [ApiServiceService],

})
export class DetailsArticleModule { }
