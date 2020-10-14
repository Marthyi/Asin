import { AsinStateEnum } from "src/app/core/models";

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
}

export interface Asin {
  asin: string;
  title: string;
  state: AsinStateEnum;
}

export const initialState: MainState = {
  asins: [],
  asinsState: SimpleRequestState.Loading
};
