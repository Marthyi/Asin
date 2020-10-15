import { Component, OnInit } from "@angular/core";
import { PageEvent } from '@angular/material/paginator';
import { Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
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
  public displayedColumns: string[] = [
    "asin",
    "date",
    "title",
    "content",
    "rating",
  ];
  dataSource: MatTableDataSource<ReviewServiceModel>;

  columnSort: string = "";
  columnDirection: string = "";
  page: number = 0;

  constructor(private store: Store<IAppState>) {
    this.loadPage();

    this.dataSource = new MatTableDataSource<ReviewServiceModel>([]);
    this.reviews$ = this.store.select(selectReviews);

    this.reviews$.subscribe((p) => {
      this.dataSource.data = p;

      console.log(p);
    });
  }

  ngOnInit(): void {}

  loadPage() {
    window.location.href =
      "#/reviews?page=" +
      this.page +
      "&column=" +
      this.columnSort +
      "&direction=" +
      this.columnDirection;

    this.store.dispatch(StateActions.Main.loading_Reviews());
  }

  sortData(sort: Sort) {
    this.columnSort = sort.active;
    this.columnDirection = sort.direction;
    this.loadPage();
  }

  pageEvent(event:PageEvent){
    this.page = event.pageIndex;

    this.loadPage();
  }

}
