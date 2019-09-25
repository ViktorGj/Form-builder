import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

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

  getShareCards() {
    this.readUrl();
    return this.http.get(this.dynamicUrl + 'Forms?status=Shared&all=true&sortOrder=Descending&orderColumnName=DateUpdated');
  }

  saveForm(form) {
    this.readUrl();
    return this.http.post(this.dynamicUrl + 'Forms', form);
  }

  updateForm(editedForm, id) {
    this.readUrl();
    return this.http.put(this.dynamicUrl + 'Forms/' + id, editedForm)
  }

  getDraftCards() {
    this.readUrl();
    return this.http.get(this.dynamicUrl + 'Forms?status=Draft&all=true&sortOrder=Descending&orderColumnName=DateUpdated');
  }

}
