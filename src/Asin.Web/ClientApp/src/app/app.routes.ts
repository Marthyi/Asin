import { Routes } from "@angular/router";
import { AsinMasterComponent } from "./container/asin-master/asin-master.component";
import { CustomerReviewsComponent } from "./container/customer-reviews/customer-reviews.component";

export class paths {
  public static Home: string = "home";
  public static CustomerReviews: string = "reviews";
}

export const routes: Routes = [
  { path: paths.Home, component: AsinMasterComponent },
  { path: paths.CustomerReviews, component: CustomerReviewsComponent },
  { path: '**', component: AsinMasterComponent },
];
