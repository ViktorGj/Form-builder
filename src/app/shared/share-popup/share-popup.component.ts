import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ShareWarningModalComponent } from '../share-warning-modal/share-warning-modal.component';

@Component({
  selector: 'app-share-popup',
  templateUrl: './share-popup.component.html',
  styleUrls: ['./share-popup.component.scss']
})
export class SharePopupComponent implements OnInit {

  users: any;
  searchName: string;
  selectedAll: boolean;
  formId: string;
  selectWarning = false;
  sendBtnDisabled = true;
  resetUsers: any;
  allUsers: any;

  configModal = {
    ignoreBackdropClick: true
  };

  constructor(
    private _userService: UserService,
    private _modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private _toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getFormId() {
    this.formId = this._userService.formId;
  }

  getUsers() {
    this.getFormId();
    this._userService.getUsers(this.formId).subscribe(data => {
      this.users = data.payload;
      this.resetUsers = data.payload;
      this.allUsers = data.payload;
    });
  }

  search(term) {
    if (term) {
      this.users = this.users.filter(x => x.email.toLowerCase().startsWith(term.toLowerCase()));
    }
    else {
      this.resetSearch();
      this.checkIfAllSelected();
    }
  }

  resetSearch() {
    if (this.searchName === '') {
      this.users = this.resetUsers;
    }
  }

  toggleBtnWarning() {
    if (this.selectedUsers().length > 0) {
      this.sendBtnDisabled = false;
      this.selectWarning = false;
    }
    else {
      this.sendBtnDisabled = true;
      this.selectWarning = true;
    }
  }

  selectAll() {
    for (let i = 0; i < this.users.length; i++) {
      this.users[i].selected = this.selectedAll;
    }
    this.toggleBtnWarning();
  }

  checkIfAllSelected() {
    this.toggleBtnWarning();
    this.selectedAll = this.users.every((item: any) => {
      item.selected === true;
    });
  }

  selectedUsers() {
    return this.allUsers
      .filter(user => user.selected == true);
  }

  shareForm() {
    if (this._userService.isDraft == true) {
      this._userService.selectedUser = this.selectedUsers();
      this.bsModalRef.hide();
      this.openShareWarningModal();
    }
    else {
      const users = this.selectedUsers();
      this._userService.shareForm(this.formId, { users: users })
        .subscribe(res => {
          this.bsModalRef.hide();
          this.showToastr();
          this.router.navigate(['dashboard'])
          setTimeout(() => {
            location.reload();
          }, 1000);
        }, err => {
          this.showErrorToastr();
        })
    }
  }

  closeModal() {
    this.bsModalRef.hide();
  }

  openShareWarningModal() {
    this._userService.isDraft = true;
    this.bsModalRef = this._modalService.show(ShareWarningModalComponent, this.configModal);
    this.bsModalRef.content.okBtnName = 'Ok';
  }

  showToastr() {
    this._toastr.success("Form successfully sent");
  }

  showErrorToastr() {
    this._toastr.warning("Form has already been sent to this user/s");
  }
}
