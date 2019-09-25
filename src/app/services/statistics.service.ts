import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

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

  // Form submited statistics
  getForm(id): Observable<any> {
    this.readUrl();
    return this.http.get(this.dynamicUrl + 'forms/' + id + '/submissions?all=true');
  }

  getFormData(id): Observable<any> {
    this.readUrl();
    return this.http.get(this.dynamicUrl + 'Forms/' + id);
  }
}
