import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  newState: Boolean;

  constructor() { }

  public subject = new Subject<any>();

  getNewState(state) {
    this.newState = state;
    this.sendMessage();
  }

  sendMessage() {
    this.subject.next(this.newState);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
