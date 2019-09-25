import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';


@Component({
  selector: 'app-session-popup',
  templateUrl: './session-popup.component.html',
  styleUrls: ['./session-popup.component.scss']
})
export class SessionPopupComponent implements OnInit {

  constructor( public bsModalRef: BsModalRef ) { }

  ngOnInit() {
  }

}
