import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ActionCreator, Creator } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { AmazonService } from "../services/amazon.service";
import { AsinServiceModel, ServiceModelMapper } from '../services/serviceModels/models';
import { StateActions } from './actions';

@Injectable()
export class Effects {
  constructor(private actions$: Actions, private service: AmazonService) {}

  @Effect()
  $loading_Asins = this.onAction(StateActions.Main.loading_Asins).pipe(
    switchMap((p) =>
      this.service
        .getAsins()
        .pipe(
          switchMap((asins) =>
            of(
              StateActions.Main.loaded_Asins(<{asins:AsinServiceModel[]}>{
                asins: asins.map(ServiceModelMapper.MapToAsin),
              })
            )
          )
        )
    )
  );

  @Effect()
  $add_Asin = this.onAction(StateActions.Main.add_Asin).pipe(
    switchMap((p) =>
      this.service
        .postAsin(p.asin)
        .pipe(
          switchMap(_ =>
            of(
              // StateActions.Main. loaded_Asins(<{asins:AsinServiceModel[]}>{
              //   asins: asins.map(ServiceModelMapper.MapToAsin),
              // })
            )
          )
        )
    )
  );

  private onAction<
    TActionType extends string,
    TActionParameter extends Creator,
    TActionCreator extends ActionCreator<TActionType, TActionParameter>,
    TAction = ReturnType<TActionCreator>
  >(action: TActionCreator): Observable<TAction> {
    return this.actions$.pipe(ofType(action));
  }
}
