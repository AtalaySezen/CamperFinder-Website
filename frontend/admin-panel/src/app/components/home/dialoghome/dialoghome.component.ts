import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialoghome',
  templateUrl: './dialoghome.component.html',
  styleUrls: ['./dialoghome.component.scss']
})
export class DialoghomeComponent {
  constructor(public dialogRef: MatDialogRef<DialoghomeComponent>) {}


  
}
