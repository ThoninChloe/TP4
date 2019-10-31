import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService} from '../../../../apiService.service';
import { DetailsArticleComponent } from './details-article.component';


const routes: Routes = [
  {
    path: '',
    component: DetailsArticleComponent,
  }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    HttpClientModule],
    providers: [ApiServiceService],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }

