import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginInfo: Object;
  role: string;
  formId: string;
  isDraft: boolean;
  selectedUser: any;
  questionnaireForm: any;
  url = window.location.origin;
  routeString: string;
  dynamicUrl: string;

  private dataSource = new BehaviorSubject<any>([this.formId]);
  updatedFormId = this.dataSource.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  readUrl() {
    this.routeString = this.url.split("//")[1].split(".")[0].split("-")[0];
    if (this.routeString == "localhost:4200" || this.routeString == "dev") {
      this.dynamicUrl = "http://tenant1.dev-docker.office.it-labs.com:9016/"
    }
    else {
      this.dynamicUrl = "http://" + this.routeString + ".dev-docker.office.it-labs.com:9016/";
    }
  }

  setIdOnSave(formId) {
    this.dataSource.next(formId)
  }

  authLogin(loginInfo): Observable<any> {
    this.readUrl();
    return this.http.post(this.dynamicUrl + 'Auth', loginInfo);
  }

  getLoginInfo(data) {
    this.loginInfo = data.payload;
    this.role = data.payload.roles[0].name;
    localStorage.setItem('user-role', JSON.stringify(this.role));
  }

  isLoggedIn() {
    return !!localStorage.getItem('access-token');
  }

  getUsers(formId): Observable<any> {
    this.readUrl();
    return this.http.get(this.dynamicUrl + 'Users?formId=' + formId + '&all=true');
  }

  searchUsers(searchName, formId) {
    this.readUrl();
    return this.http.get(this.dynamicUrl + 'Users?keyword=' + searchName + "&formId=" + formId + "&all=true");
  }

  getToken() {
    this.readUrl();
    return this.http.put(this.dynamicUrl + 'Auth', '');
  }

  shareForm(formId, users): Observable<any> {
    this.readUrl();
    return this.http
      .post(this.dynamicUrl + 'forms/' + formId + '/submissions', users)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(err);
        })
      )
  }
}
