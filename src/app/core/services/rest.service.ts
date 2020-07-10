import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class RestService {
  endpoint: string = environment.baseUrl;
  public _globalSaveToggle$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public globalSaveToggle: boolean = false;
  public _golbalSaveUserUpdate$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  /**
  * @desc list users(
  */
  getUserList(pageNo): Observable<any> {
    return this.http.get<any>(
      this.endpoint + "api/users?page=" + pageNo);
  }

  /**
  * @desc update users information(
  */
  updateUser(payload): Observable<any> {
    return this.http.patch(`${this.endpoint}api/users`, payload)
  }

}
