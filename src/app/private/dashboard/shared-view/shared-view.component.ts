import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { CardService } from '../../../services/card.service';
import { UserService } from '../../../services/user.service';
import { SharePopupComponent } from '../../../shared/share-popup/share-popup.component';


@Component({
  selector: 'app-shared-view',
  templateUrl: './shared-view.component.html',
  styleUrls: ['./shared-view.component.scss']
})
export class SharedViewComponent implements OnInit {

  bsModalRef: BsModalRef;
  questionnaire;
  cardsData: any;
  isInitialized = false;
  queryParams: any = {};
  totalItems: any;

  configModal = {
    ignoreBackdropClick: true
  };

  constructor(
    private _modalService: BsModalService,
    private _cardService: CardService,
    private _userService: UserService
  ) { }


  ngOnInit() {
    this.getCardsData();
  }

  resetFormId() {
    this._userService.formId = null;
  }

  getCardsData() {
    this.resetFormId();
    this._cardService.getShareCards().subscribe((data: any) => {
      this.totalItems = data.meta.totalCount;
      this.cardsData = data.payload;
    });
  }

  openShareModal(id) {
    this._userService.isDraft = false;
    this._userService.formId = id;
    this.bsModalRef = this._modalService.show(SharePopupComponent, this.configModal);
    this.bsModalRef.content.okBtnName = 'Ok';
  }
}
