import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormService } from '../../../../../../services/form.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  textForm: FormGroup;
  @Output() newQuestion = new EventEmitter();
  editQuestion: boolean = true;
  @Input() questionData: any;
  selectedFile: File = null;
  imageId: string;

  configToolbar = {
    toolbar: [
      ["Bold", "Italic", "Strike"],
      ["NumberedList", "BulletedList"],
      ["Cut", "Copy", "Undo", "Redo"]
    ],
    title: false
  };

  pleaseWait: boolean = false;

  constructor(private formBuilder: FormBuilder,
    public formService: FormService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.createTextGroup(this.questionData);
  }

  createTextGroup(question) {
    this.textForm = this.formBuilder.group({
      name: question.name || "Type your question",
      type: question.type,
      edit: question.edit,
      imageLink: question.imageLink,
      imageId: question.imageId,
      options: this.formBuilder.array([{ name: "some" }])
    })
    question.edit == true
      ? this.editQuestion = true
      : this.editQuestion = false
  }

  onEdit() {
    if (this.editQuestion === false) {
      this.editQuestion = true;
      this.textForm.get('edit').setValue(true);
    } else if (this.editQuestion === true) {
      this.editQuestion = false;
      this.textForm.get('edit').setValue(false);
      this.saveQuestion();
    }
  }

  saveQuestion() {
    this.newQuestion.emit(this.textForm.value);
  }
  // Upload Image
  async onFileSelected(event) {
    if (this.textForm.value.imageId) {
      this.formService.deleteImage(this.textForm.value.imageId).subscribe((data: any) => {
      });
    }
    this.selectedFile = <File>event.target.files[0];
    await this.onUpload();
    this.newQuestion.emit(this.textForm.value);
  }

  async onUpload() {
    const fd = new FormData();
    fd.append("file", this.selectedFile, this.selectedFile.name);
    this.pleaseWait = true;
    await this.formService.uploadImage(fd).toPromise().then((event: any) => {
      this.textForm.value.imageLink = event.payload.imageLink;
      this.textForm.value.imageId = event.payload.imageId;
      this.pleaseWait = false;
    },
      error => {
        this.toastr.error(" Supported file types: JPG, JPEG, PNG, GIF", '\n' + "Invalid file type")
      }
    );
  }
  async removeImg(id) {
    await this.formService.deleteImage(id).toPromise().then((data: any) => {
      this.textForm.value.imageLink = "";
    });
    this.newQuestion.emit(this.textForm.value);
  }

}
