import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { NavbarComponent } from './nav/nav.component';

import { Configuration } from './products/product.constants';
import { ProductData } from './products/product.data'
import { ProductService } from './products/product.service';

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule,
                   HttpModule
                   ],
  declarations: [ AppComponent,
                          ProductComponent,
                          NavbarComponent
                          ],
  providers: [ ProductService,
                  ProductData,
                  Configuration],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
