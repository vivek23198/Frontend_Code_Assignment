import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DescriptionCityService {

  baseUrl = "http://localhost:3000/api";

  constructor(private _http: HttpClient) { }

    public getCityData(){
      return this._http.get(`${this.baseUrl}/city`);
    }

    public getDescription(){
      return this._http.get(`${this.baseUrl}/home`);
    }
}
