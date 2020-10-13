import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import {AsinMasterComponent} from './container/asin-master/asin-master.component';
import { PageComponent } from './components/page/page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AsinMasterComponent,
    PageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
