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

@NgModule({
  declarations: [AppComponent, AsinMasterComponent, PageComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    EffectsModule.forRoot([Effects]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot(routes),
  ],
  providers: [AmazonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
