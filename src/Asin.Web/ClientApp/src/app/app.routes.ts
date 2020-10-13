import { Routes } from '@angular/router';
import { AsinMasterComponent } from './container/asin-master/asin-master.component';

export class paths {
  public static Home: string = "";
  public static Posts: string = "posts";

  public static Post(article: string): string {
    return `${paths.Posts}/${article}`;
  }
}

export const routes: Routes = [
   { path: paths.Home, component: AsinMasterComponent },
  // { path: paths.Posts + "/:post", component: ArticleComponent }
];