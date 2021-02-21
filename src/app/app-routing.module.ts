import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareProductComponent } from './compare-product/compare-product.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { HomeComponent } from './home/home.component';
import { ListBrandsComponent } from './list-brands/list-brands.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { SampleComponent } from './sample/sample.component';
import { ViewConfigurationComponent } from './view-configuration/view-configuration.component';








const routes: Routes = [
  {
    path: 'listBrands', component: ListBrandsComponent
  },
  {
    path: '', component: SampleComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'listProducts/:brandName', component: ListProductsComponent
  },
  {
    path: 'viewConfig/:id', component: ViewConfigurationComponent
  },
  {
    path: 'compareProducts', component: CompareProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routingComponents = [
   ListBrandsComponent,
   HomeComponent,
   ListProductsComponent,
   ViewConfigurationComponent,
   CompareProductComponent,
   SampleComponent,
   DialogExampleComponent
 ];
