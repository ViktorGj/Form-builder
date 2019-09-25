import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { ToastrService } from "ngx-toastr";
import { FormService } from "../../../../../../services/form.service";

@Component({
  selector: "app-radio",
  templateUrl: "./radio.component.html",
  styleUrls: ["./radio.component.scss"]
})
export class RadioComponent implements OnInit {
  @Output() newQuestion = new EventEmitter();
  radioForm: FormGroup;
  editQuestion: boolean;
  error: string;
  imageLink: string;
  imageId: string;
  idImage: string;
  selectedFile: File = null;
  url: string;
  urlOption: string;
  @Input() questionData: any;
  pleaseWait: boolean = false;

  configToolbar = {
    toolbar: [
      ["Bold", "Italic", "Strike"],
      ["NumberedList", "BulletedList"],
      ["Cut", "Copy", "Undo", "Redo"]
    ],
    title: false
  };

  constructor(
    private formBuilder: FormBuilder,
    public formService: FormService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.createRadioGroup(this.questionData);
  }

  createRadioGroup(question) {
    this.radioForm = this.formBuilder.group({
      name: question.name || "Type your question",
      type: question.type,
      edit: question.edit,
      imageLink: question.imageLink,
      imageId: question.imageId,
      options: this.formBuilder.array([])
    });
    this.createOptions(question.options);
    question.edit == true
      ? (this.editQuestion = true)
      : (this.editQuestion = false);
  }

  createOptions(options?) {
    !!options ? this.populateOptions(options) : this.createDefaultOptions();
  }

  populateOptions(options) {
    options.forEach(option => {
      let currentOption = this.formBuilder.group({
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        name: option.name,
        points: option.points || 0,
        imageLink: option.imageLink,
        imageId: option.imageId
      });
      let optionArray = this.radioForm.get("options") as FormArray;
      optionArray.push(currentOption);
    });
  }

  createDefaultOptions() {
    let defaultOptions = this.radioForm.get("options") as FormArray;
    for (let i = 0; i < 3; i++) {
      let currentOption = this.formBuilder.group({
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        name: `option ${i + 1}`,
        points: 0,
        imageLink: "",
        imageId: ""
      });
      defaultOptions.push(currentOption);
    }
  }

  addOption() {
    let options = this.radioForm.get("options") as FormArray;
    let option = this.formBuilder.group({
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      name: "",
      points: 0,
      imageLink: ""
    });
    options.push(option);
  }

  deleteOption(index) {
    let options = this.radioForm.get("options") as FormArray;
    options.removeAt(index);
  }

  onEdit() {
    if (this.editQuestion === false) {
      this.editQuestion = true;
      this.radioForm.get("edit").setValue(true);
    } else if (this.editQuestion === true) {
      this.editQuestion = false;
      this.radioForm.get("edit").setValue(false);
      this.saveQuestion();
    }
  }

  numberOnly(event, value): boolean {
    const charCode = event.charCode;
    if ((charCode === 45 && value === "") || (charCode > 47 && charCode < 58)) {
      return true;
    } else {
      return false;
    }
  }

  onPointsFocusOut(input, i) {
    let options = this.radioForm.get("options") as FormArray;
    if (input === "" || input === "-") {
      options.value[i].points = 0;
    } else {
      options.value[i].points = parseInt(input);
    }
  }

  saveQuestion() {
    this.newQuestion.emit(this.radioForm.value);
  }

  drop(event: CdkDragDrop<string[]>) {
    let newOrder = this.radioForm.get("options")["controls"];
    moveItemInArray(newOrder, event.previousIndex, event.currentIndex);
    this.reorderOptions(newOrder);
    this.newQuestion.emit(this.radioForm.value);
  }

  reorderOptions(optionArray) {
    let newArray = [];
    optionArray.forEach(option => {
      newArray.push(option.value);
    });
    this.radioForm.value.options = newArray;
  }

  // IMAGE UPLOAD
  async onFileSelected(event) {
    if (this.radioForm.value.imageId) {
      this.formService.deleteImage(this.radioForm.value.imageId).subscribe((data: any) => {
      });
    }
    this.selectedFile = <File>event.target.files[0];
    await this.onUpload();
    this.newQuestion.emit(this.radioForm.value);
  }

  async onUpload() {
    const fd = new FormData();
    fd.append("file", this.selectedFile, this.selectedFile.name);
    this.pleaseWait = true;
    await this.formService.uploadImage(fd).toPromise().then((event: any) => {
      this.radioForm.value.imageLink = event.payload.imageLink;
      this.radioForm.value.imageId = event.payload.imageId;
      this.pleaseWait = false;
    },
      error => {
        this.toastr.error(" Supported file types: JPG, JPEG, PNG, GIF", '\n' + "Invalid file type");
      }
    );
  }

  async onFileSelectedOption(event, options) {
    if (options.value.imageId) {
      this.formService.deleteImage(options.value.imageId).subscribe((data: any) => {
      });
    }
    this.selectedFile = <File>event.target.files[0];
    await this.onUploadOption(options);
    this.newQuestion.emit(this.radioForm.value);
  }

  async onUploadOption(options) {
    const fd = new FormData();
    fd.append("file", this.selectedFile, this.selectedFile.name);
    this.pleaseWait = true;
    await this.formService.uploadImage(fd).toPromise().then((event: any) => {
      this.urlOption = event.payload.imageLink;
      this.idImage = event.payload.imageId;
      this.uploadOptionImage(options);
      this.pleaseWait = false;
    },
      error => {
        this.toastr.error(" Supported file types: JPG, JPEG, PNG, GIF", '\n' + "Invalid file type")
      }
    );
  }

  uploadOptionImage(option) {
    let optionId = option.controls.id.value;
    let options = this.radioForm.get("options") as FormArray;
    let mappedArray = [];
    options.controls.forEach(control => {
      mappedArray.push(control.value);
    });
    let selectedOption = mappedArray;
    for (let i = 0; i < mappedArray.length; i++) {
      if (mappedArray[i].id == optionId) {
        selectedOption = option;
        mappedArray[i].imageLink = this.urlOption;
        mappedArray[i].imageId = this.idImage;
        this.radioForm.get("options")["controls"][i].imageLink = this.urlOption;
      }
    }
  }

  async removeImg(id) {
    await this.formService.deleteImage(id).toPromise().then((data: any) => {
      this.radioForm.value.imageLink = "";
    });
    this.newQuestion.emit(this.radioForm.value);
  }
  
  async removeImgOption(item, id) {
    if (item.value.imageLink) {
      await this.formService.deleteImage(id).toPromise().then((data: any) => {
        item.value.imageLink = "";
      });
      this.newQuestion.emit(this.radioForm.value);
    }
  }
}
