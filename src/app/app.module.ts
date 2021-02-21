import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { LocationStrategy, HashLocationStrategy } from '@angular/common';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { MatCommonModule } from '@angular/material/core';
import { ListProductsComponent } from './list-products/list-products.component';
import { ViewConfigurationComponent } from './view-configuration/view-configuration.component';
import { CompareProductComponent } from './compare-product/compare-product.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SampleComponent } from './sample/sample.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
   
    ListProductsComponent,
    ViewConfigurationComponent,
    CompareProductComponent,
    FooterComponentComponent,
    SampleComponent,
    DialogExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule,
    
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
