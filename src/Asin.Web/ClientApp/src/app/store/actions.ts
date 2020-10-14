import { Asin, IAppState, initialState, MainState, SimpleRequestState } from "./model";

import {
  ActionReducerMap,
  createAction,
  createReducer,
  on,
  props,
} from "@ngrx/store";
import { AsinServiceModel, ReviewServiceModel } from '../services/serviceModels/models';

export const StateActions = {
  Main: {
    add_Asin: createAction("[Asins] Add ASIN", props<Asin>()),
    loading_Asins: createAction("[Asins] Load ASINs"),
    loaded_Asins: createAction("[Asins] Loaded ASINs", props<{ asins: AsinServiceModel[]}>()),
    loading_Reviews: createAction("[Reviews] Load Reviews"),
    loaded_Reviews: createAction("[Reviews] Loaded Reviews", props<{ reviews: ReviewServiceModel[]}>()),
  },
};

function LoadingReviewsAction(state: MainState): MainState {
  return {
    ...state,
  };
}

function LoadedReviewsAction(state: MainState, reviewsRequest:{reviews:ReviewServiceModel[]}): MainState {
  return {
    ...state,
    reviews: reviewsRequest.reviews
  };
}

function LoadingAsinsAction(state: MainState): MainState {
  return {
    ...state,
  };
}

function LoadedAsinsAction(state: MainState, asinsRequest:{asins:AsinServiceModel[]}): MainState {
  return {
    ...state,
    asinsState: SimpleRequestState.Loaded,
    asins: asinsRequest.asins
  };
}

function AddAsinCodeAction(state: MainState, asin: Asin): MainState {
  if (state.asins.find((p) => p.asin == asin.asin)) {
    return {
      ...state
    };
  }

  return {
    ...state,
    asins: [...state.asins, asin],
  };
}

export const applicationStateReducer = createReducer<MainState>(
  initialState,
  on(StateActions.Main.add_Asin, AddAsinCodeAction),
  on(StateActions.Main.loading_Asins, LoadingAsinsAction),
  on(StateActions.Main.loaded_Asins, LoadedAsinsAction),
  on(StateActions.Main.loading_Reviews, LoadingReviewsAction),
  on(StateActions.Main.loaded_Reviews, LoadedReviewsAction)
);

export const reducers: ActionReducerMap<IAppState> = {
  main: applicationStateReducer,
};
