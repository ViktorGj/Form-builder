import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { UserService } from '../../../services/user.service';
import { CardService } from '../../../services/card.service';
import { SharePopupComponent } from '../../../shared/share-popup/share-popup.component';

@Component({
  selector: 'app-draft-view',
  templateUrl: './draft-view.component.html',
  styleUrls: ['./draft-view.component.scss']
})
export class DraftViewComponent implements OnInit {

  bsModalRef: BsModalRef;
  draftArray:any;
  totalItems: number;

  configModal = {
    ignoreBackdropClick: true
  };

  constructor(
    private _modalService: BsModalService,
    private _cardService: CardService,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.getDraftCards();
  }

  resetFormId() {
    this._userService.formId = null;
  }

  getDraftCards(){
    this.resetFormId();
    this._cardService.getDraftCards().subscribe((data: any) => {
      this.totalItems = data.meta.totalCount;
      this.draftArray = data.payload;
    })
  }

  openShareModal(id) {
    this._userService.isDraft = true;
    this._userService.formId = id;
    this.bsModalRef = this._modalService.show(SharePopupComponent, this.configModal);
    this.bsModalRef.content.okBtnName = 'Ok';
  }

}
