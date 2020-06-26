import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IGituser } from "../interfaces/data.interface";

//http client
@Injectable({
  providedIn: "root",
})
export class DataService {
  private _url: string = "https://api.github.com";

  constructor(private _http: HttpClient) {} // dependency injection — goes in the constructor

  // observables — continous stream of data that you monitor as it comes
  getUsers(): Observable<IGituser[]> {
    return this._http.get<IGituser[]>(this._url);
  }
}