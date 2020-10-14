import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AsinServiceModel } from "src/app/services/serviceModels/models";

@Injectable({
  providedIn: "root",
})
export class AmazonService {
  constructor(private httpClient: HttpClient) {}

  getAsins(): Observable<AsinServiceModel[]> {
    let response: Observable<AsinServiceModel[]>;

    response = this.httpClient.get<AsinServiceModel[]>("/asins");

    return response;
  }

  postAsin(asin: string): Observable<any> {
   return this.httpClient.post("/asins", { asinCode: asin });
  }
}
