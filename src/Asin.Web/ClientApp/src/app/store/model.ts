import { AsinStateEnum } from "src/app/core/models";
import { ReviewServiceModel } from '../services/serviceModels/models';

export interface IAppState {
  main: MainState;
}

export enum SimpleRequestState{
  Loading = 1,
  Loaded = 2,
  Error = 3
}


export interface MainState {
  asins: Asin[];
  asinsState: SimpleRequestState;

  reviews:ReviewServiceModel[];

}

export interface Asin {
  asin: string;
  title: string;
  state: AsinStateEnum;
}

export const initialState: MainState = {
  asins: [],
  asinsState: SimpleRequestState.Loading,
  reviews:[]
};
