import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { UserService } from '../../services/user.service';
import { CardService } from '../../services/card.service';
import { IsaveFormRes } from '../../private/drag-drop-view/dynamic-form/dynamic-form/models/saveFormRespons';
import { Router } from '@angular/router';
import { SharePopupComponent } from '../share-popup/share-popup.component';

@Component({
  selector: 'app-save-on-share-popup',
  templateUrl: './save-on-share-popup.component.html',
  styleUrls: ['./save-on-share-popup.component.scss']
})
export class SaveOnSharePopupComponent implements OnInit {

  configModal = {
    ignoreBackdropClick: true
  };
  
  constructor( private _userService: UserService,
               public _cardService: CardService,
               private _modalService: BsModalService,
               private bsModalRef: BsModalRef,
               public router: Router) { }

  ngOnInit() {}

  getQuestionnaireData() {
    return this._userService.questionnaireForm;
  }

  saveAndShare () {
    this.saveForm();
    this.closeModal();
    setTimeout(() => {
      this.openShareModal();
    }, 1000);
  }

  saveForm() {
    let questionnaireForm = this.getQuestionnaireData();
    if (this._userService.formId) {
      this._cardService.updateForm(questionnaireForm, this._userService.formId)
        .subscribe(res => {
        })
    }
    else {
      this._cardService.saveForm(questionnaireForm)
        .subscribe((data: IsaveFormRes) => {
          this._userService.formId = data.payload;
        });
    }
  };

  closeModal(){
    this.bsModalRef.hide();
  }

  openShareModal() {
    this._userService.isDraft = true;
    this.bsModalRef = this._modalService.show(SharePopupComponent, this.configModal);
    this.bsModalRef.content.okBtnName = 'Ok';
  }

}
