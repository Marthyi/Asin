import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AsinStateEnum, EnumLabels } from "src/app/core/models";
import { StateActions } from "src/app/store/actions";
import { Asin, IAppState, SimpleRequestState } from "src/app/store/model";
import { selectAsins, selectAsinsState } from "src/app/store/selectors";

@Component({
  selector: "app-asin-master",
  templateUrl: "./asin-master.component.html",
  styleUrls: ["./asin-master.component.scss"],
})
export class AsinMasterComponent implements OnInit {
  public asin: string;
  public asinLabels = EnumLabels.AsinState;
  public ASIN_STATE = AsinStateEnum;
  public STATE = SimpleRequestState;
  public asins$: Observable<Asin[]>;
  public asinsState$: Observable<SimpleRequestState>;

  public displayedColumns: string[] = ['asin','title','state'];
  public dataSource :  MatTableDataSource<Asin>;

  constructor(private store: Store<IAppState>) {
    this.asin = "B082XY23D5";

    this.dataSource = new MatTableDataSource<Asin>([]);

    this.asins$ = store.select(selectAsins);
    this.asinsState$ = store.select(selectAsinsState);

    this.store.dispatch(StateActions.Main.loading_Asins());

    this.asins$.subscribe((p) => {

      let source = p.map(item => {
        return {
          ...item,
          stateLabel : EnumLabels.AsinState[item.state]
        }
      });

      

      this.dataSource.data = source;

      if (p.filter((asin) => asin.state == AsinStateEnum.Loading).length > 0) {
        setTimeout(
          () => this.store.dispatch(StateActions.Main.loading_Asins()),
          1000
        );
      }
    });
  }
  ngOnInit(): void {}

  addAsin() {
    this.store.dispatch(
      StateActions.Main.add_Asin(<Asin>{
        asin: this.asin,
        state: AsinStateEnum.Loading,
      })
    );

    console.log(this.asin);
  }
}
