
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, of } from 'rxjs';
import * as _ from 'lodash';
import { environment } from "../../../environments/environment";
import { NotificationService } from 'src/app/core/services/notification.service';
import { LOGIN } from "src/app/core/models/notification-msg-model";


@Injectable()
export class AuthenticationService {
  endpoint: string = environment.baseUrl;
  public _setAdminAccess$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  userData = []

  constructor(private http: HttpClient, private router: Router, private notificationService: NotificationService) {
  }

  /**
   * @desc Store logged in user token in localstorage(
   */
  storeAuthenticatedUser(token) {
    localStorage.setItem("ACCESS_TOKEN", token);
  }
  /**
  * @desc login users(
   */
  getUserDetail(payload): Promise<any> {
    return this.http.post(`${this.endpoint}api/login`, payload).toPromise()
      .then((response: any) => {
        if (response && response.token) {
          if (response.token == "QpwL5tke4Pnpja7X4") {
            localStorage.setItem("ADMIN_ACCESS", "true")
            this._setAdminAccess$.next("admin")
          }
          else {
            localStorage.setItem("ADMIN_ACCESS", "false")
            this._setAdminAccess$.next("customer")
          }
          this.storeAuthenticatedUser(response.token);
          this.router.navigate(['home'])
          this.notificationService.showNotification(
            LOGIN.LOGIN_SUCCESS
          );
        }
        else {

        }
      }).catch(this.handleErrorMsg<any>('login failed'))
  }

  /**
 * @desc error handling method
  */
  private handleErrorMsg<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.notificationService.showNotification(
        LOGIN.LOGIN_UNSUCCESS
      );
      console.log(`${operation} failed: ${error.error.message}`);
      return of(result as T);
    };
  }
}
