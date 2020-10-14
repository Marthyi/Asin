import { IAppState, MainState } from './model';
import { createSelector } from "@ngrx/store";

const getMain = (state: IAppState) => state.main;

const createMainStateSelector = function <T>(
  selector: (state: MainState) => T
) {
  return createSelector(getMain, selector);
};

export const selectAsins = createMainStateSelector((p) => p.asins);
export const selectAsinsState = createMainStateSelector((p) => p.asinsState);

export const selectReviews = createMainStateSelector((p) => p.reviews);