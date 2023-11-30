import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.development";import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable
({
  providedIn: 'root'
})
export class PersonalInfoService{
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/PersonalInfo/';

  constructor (private http: HttpClient){}

  getPersonalInfo(): Observable<any>{
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
