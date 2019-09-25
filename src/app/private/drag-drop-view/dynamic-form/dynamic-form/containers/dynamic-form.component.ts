import { Component, Input, OnChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CardService } from '../../../../../services/card.service';
import { QuestionType } from '../../../../dashboard/users-review/users-review.component';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { UserService } from '../../../../../services/user.service';
import { IsaveFormRes } from '../models/saveFormRespons';
import { SaveOnSharePopupComponent } from '../../../../../shared/save-on-share-popup/save-on-share-popup.component';
import { FormService } from '../../../../../services/form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnChanges {
  bsModalRef: BsModalRef;
  config = [];
  @Input() formData: any;
  titleEdit: boolean;
  questionnaireTitle: string;
  formId: any;
  toggleCLick: boolean = true;

  configToolbar = {
    toolbar: [
      ["Bold", "Italic", "Strike"],
      ["Cut", "Copy", "Undo", "Redo"]
    ],
    title: false
  };

  configModal = {
    ignoreBackdropClick: true
  };

  constructor(public _cardService: CardService,
              public router: Router,
              private _modalService: BsModalService,
              private _userService: UserService,
              public formService: FormService) { }

  todo = [
    { type: QuestionType.radio, image: 'far fa-check-circle', name: '', edit: true },
    { type: QuestionType.checkbox, image: 'far fa-check-square', name: '', edit: true },
    { type: QuestionType.text, image: 'fas fa-font', name: '', edit: true }
  ];

  ngOnChanges() {
    this.populateConfig();
  }

  // populate config with questions from draft
  populateConfig() {
    if (this.formData) {
      this.titleEdit = false;
      this.questionnaireTitle = this.formData.name;
      this.formData.questions.forEach(question => {
        this.config.push(question);
      });
    }
    else {
      this.titleEdit = true;
      this.questionnaireTitle = "Questionnaire 1";
    }
  }

  saveQuestion(event, id) {
    this.config.forEach(question => {
      if (question.id == id) {
        let editedQuestion = event
        editedQuestion.id = id;
        this.config.splice(this.config.indexOf(question), 1, editedQuestion);
      }
    })
  }

  saveForm() {
    let questionnaireForm = {
      'name': this.questionnaireTitle || "Questionnaire 1",
      'questions': this.config,
      'id': null
    }
    if (this.formData) {
      this._cardService.updateForm(questionnaireForm, this.formData.id)
        .subscribe(res => {
          this.router.navigate(['dashboard/draft']);
        })
      this._userService.formId = this.formData.id;
    }
    else if (this._userService.formId) {
      this._cardService.updateForm(questionnaireForm, this._userService.formId)
        .subscribe(res => {
          this.router.navigate(['dashboard/draft']);
        })
    }
    else {
      this._cardService.saveForm(questionnaireForm)
        .subscribe((data: IsaveFormRes) => {
          this._userService.formId = data.payload;
          this.router.navigate(['dashboard/draft']);
        });
    }
  };

  onShare() {
    this.formData ? this._userService.formId = this.formData.id : this._userService.formId
    this._userService.questionnaireForm = {
      'name': this.questionnaireTitle || "Questionnaire 1",
      'questions': this.config,
      'id': null
    }
    this.openSaveModal();
  }

  openSaveModal() {
    this._userService.isDraft = true;
    this.bsModalRef = this._modalService.show(SaveOnSharePopupComponent, this.configModal);
    this.bsModalRef.content.okBtnName = 'Ok';
  }

  deleteQuestion(index) {
    this.config.splice(index, 1);
  }

  changeButtonState() {
    this.titleEdit = !this.titleEdit;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.config, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.todo = [
      { type: QuestionType.radio, image: 'far fa-check-circle', name: '', edit: true },
      { type: QuestionType.checkbox, image: 'far fa-check-square', name: '', edit: true },
      { type: QuestionType.text, image: 'fas fa-font', name: '', edit: true }
    ];

    this.generateId(this.config);
  }

  generateId(data) {
    data.forEach(question => {
      question.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    });
  }

  onAddClick() {
    if (this.toggleCLick) {
      this.toggleCLick = false;
    } else {
      this.toggleCLick = true;
    }
  }

  async removeImgs(item) {
    if(item.imageId){
      await this.formService.deleteImage(item.imageId).toPromise().then((data: any) => {})
    }
    await item.options.forEach(option => {
      if(option.imageId){
        this.formService.deleteImage(option.imageId).toPromise().then((data: any) => {})
      }
    })
  }
  
}
