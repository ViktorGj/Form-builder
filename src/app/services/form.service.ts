import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  formId: string;
  idSubmissions: string;
  myToken = localStorage.getItem('access-token');
  url = window.location.origin;
  routeString: string;
  dynamicUrl: string;

  constructor(private http: HttpClient) { }

  readUrl() {
    this.routeString = this.url.split("//")[1].split(".")[0].split("-")[0];
    if (this.routeString == "localhost:4200" || this.routeString == "dev") {
      this.dynamicUrl = "http://tenant1.dev-docker.office.it-labs.com:9016/"
    }
    else {
      this.dynamicUrl = "http://" + this.routeString + ".dev-docker.office.it-labs.com:9016/";
    }
  }

  getFormById(): Observable<any> {
    this.readUrl();
    return this.http.get(this.dynamicUrl + "forms/"
      + this.formId + '/submissions/'
      + this.idSubmissions
      + '/users/?all=true&orderColumnName=Order');
  }

  getFormByIdAdmin(formIdAdmin, idSubmissionsAdmin) {
    this.readUrl();
    return this.http.get(this.dynamicUrl + "forms/"
      + formIdAdmin + '/submissions/'
      + idSubmissionsAdmin
      + '/admin?all=true&orderColumnName=Order');
  }

  getPoints(formIdAdmin, idSubmissionsAdmin) {
    this.readUrl();
    return this.http.get(this.dynamicUrl + "forms/" + formIdAdmin + '/submissions/' + idSubmissionsAdmin + '/admin' + '/info');
  }

  getFormInfo() {
    this.readUrl();
    return this.http.get(`${this.dynamicUrl}forms/${this.formId}/info`);
  }

  getSubmittedForm() {
    this.readUrl();
    return this.http.get(`${this.dynamicUrl}forms/${this.formId}/submissions/${this.idSubmissions}/users/info`);
  }

  autoSave(arrayToPost) {
    this.readUrl();
    return this.http.put<any>(`${this.dynamicUrl}forms/${this.formId}/submissions/${this.idSubmissions}`, arrayToPost);
  }

  submitForm() {
    this.readUrl();
    return this.http.put<any>(`${this.dynamicUrl}forms/${this.formId}/submissions/${this.idSubmissions}/status`, {});
  }

  uploadImage(fileForm) {
    this.readUrl();
    return this.http.post(`${this.dynamicUrl}Upload/image/`, fileForm);
  }

  deleteImage(id) {
    this.readUrl();
    return this.http.delete(`${this.dynamicUrl}Upload/image/` + id);
  }
}
