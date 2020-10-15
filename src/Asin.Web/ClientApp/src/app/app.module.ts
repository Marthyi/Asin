import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AsinMasterComponent } from "./container/asin-master/asin-master.component";
import { PageComponent } from "./components/page/page.component";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";

import { reducers } from "./store/actions";
import { AmazonService } from "./services/amazon.service";
import { EffectsModule } from '@ngrx/effects';
import { Effects } from "./store/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CustomerReviewsComponent } from './container/customer-reviews/customer-reviews.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [AppComponent, AsinMasterComponent, PageComponent, CustomerReviewsComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    EffectsModule.forRoot([Effects]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [AmazonService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
