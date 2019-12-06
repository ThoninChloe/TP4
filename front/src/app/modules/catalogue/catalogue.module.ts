import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogueComponentRoutingModule } from './catalogue-routine.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ CatalogueComponent,
                ],
  imports: [
    CommonModule,
    CatalogueComponentRoutingModule,
    HttpClientModule,
    FormsModule,
  ],

  
})
export class CatalogueModule { }
