import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { StatisticsService } from '../../services/statistics.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionType } from '../dashboard/users-review/users-review.component';
import { IformData } from '../../model/formData';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
              private _statistics: StatisticsService) { }

  formData: IformData;
  formId: string;
  config = [];

  ngOnInit() {
    this.getFormData();
  }

  getFormId() {
    return this.activeRoute.snapshot.params.formId;
  }

  getFormData() {
    let formId = this.getFormId();
    if (formId) {
      this._statistics.getFormData(formId)
        .subscribe(data => {
          this.formData = data.payload;
      })
    }
  }

  todo = [
    { type: QuestionType.radio, image: 'fa-check-circle', name: 'Question title', imageLink: "image link" },
    { type: QuestionType.checkbox, image: 'fa-check-square', name: 'Question title', imageLink: "image link" },
    { type: QuestionType.text, image: 'fa-font', name: 'Question title', imageLink: "image link"}
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.todo = [
      { type: QuestionType.radio, image: 'fa-check-circle', name: 'Question title', imageLink: "image link"},
      { type: QuestionType.checkbox, image: 'fa-check-square', name: 'Question title', imageLink: "image link"},
      { type: QuestionType.text, image: 'fa-font', name: 'Question title', imageLink: "image link"}
    ];
  }
}

