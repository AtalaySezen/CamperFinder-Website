import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '200px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: false,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

  Form: FormGroup;
  durationInSeconds = 5;
  constructor(
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private snack: MatSnackBar,
  ) {
    {
      this.Form = new FormGroup({
        id: new FormControl(this.data.id, Validators.required),
        num: new FormControl(this.data.num, Validators.required),
        blogHeader: new FormControl(this.data.blogHeader, Validators.required),
        image: new FormControl(this.data.image, Validators.required),
        html: new FormControl(this.data.html, Validators.required),
        alt: new FormControl(this.data.alt, Validators.required)

      })
    }
  }

  ngOnInit(): void {
  }

  saveDialog() {
    let id = this.Form.get('id')?.value;
    let num = this.Form.get('num')?.value;
    let blogHeader = this.Form.get('blogHeader')?.value;
    let image = this.Form.get('image')?.value;
    let html = this.Form.get('html')?.value;
    let alt = this.Form.get('alt')?.value;

    this.http.post<any>(`https://camperfinder.org/node2/node3`, {
      num: num,
      blogHeader: blogHeader,
      image: image,
      html: html,
      alt: alt
    }).subscribe(data => {
      if (data) {
        this.snack.open('Başarıyla Kaydedildi', 'Ok', {
        });
      } else {
        console.log("hata")
        this.snack.open('Bir hata oluştu', 'Ok', {
        });
      }
    })
  }






}
