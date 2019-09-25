import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-warning-modal',
  templateUrl: './share-warning-modal.component.html',
  styleUrls: ['./share-warning-modal.component.scss']
})
export class ShareWarningModalComponent implements OnInit {
  formId: string;
  users: any;

  constructor(public bsModalRef: BsModalRef,
    private _userService: UserService,
    private _toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.getFormId();
    this.users = this._userService.selectedUser;
  }

  getFormId() {
    this.formId = this._userService.formId;
  }

  shareForm() {
    this._userService
      .shareForm(this.formId, { users: this.users })
      .subscribe(res => {
        this.bsModalRef.hide();
        this.showToastr();
        this.router.navigate(['dashboard'])
      }, err => {
        this.showErrorToastr();
      })
  }

  closeModal() {
    this.bsModalRef.hide();
  }

  showToastr() {
    this._toastr.success("Form successfully sent");
  }

  showErrorToastr() {
    this._toastr.error("Form not sent !")
  };

}
