import { Asin } from "src/app/store/model";
import { AsinStateEnum } from "../../core/models";

export interface AsinServiceModel {
  asin: string;
  title: string;
  state: AsinStateEnum;
}

export interface ReviewServiceModel {
  asin: string;
  title: string;
  content:string;
  rating:string;
  date:Date;
}

export const ServiceModelMapper = {
  MapToAsin(serviceModel: AsinServiceModel): Asin {
    return <Asin>{
      asin: serviceModel.asin,
      title: serviceModel.title,
      state: serviceModel.state,
    };
  },
};
