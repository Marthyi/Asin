import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ReviewServiceModel } from "src/app/services/serviceModels/models";
import { StateActions } from "src/app/store/actions";
import { IAppState } from "src/app/store/model";
import { selectReviews } from "src/app/store/selectors";

@Component({
  selector: "app-customer-reviews",
  templateUrl: "./customer-reviews.component.html",
  styleUrls: ["./customer-reviews.component.scss"],
})
export class CustomerReviewsComponent implements OnInit {
  reviews$: Observable<ReviewServiceModel[]>;
  public displayedColumns: string[] = [ 'asin','title', 'content', 'rating'];
  dataSource : MatTableDataSource<ReviewServiceModel>;

  constructor(private store: Store<IAppState>) {
    this.store.dispatch(StateActions.Main.loading_Reviews());

    this.dataSource = new MatTableDataSource<ReviewServiceModel>([]);
    this.reviews$ = this.store.select(selectReviews);

    this.reviews$.subscribe(p =>{
      this.dataSource.data = p;

      console.log(p);
    })

  }

  ngOnInit(): void {}
}
