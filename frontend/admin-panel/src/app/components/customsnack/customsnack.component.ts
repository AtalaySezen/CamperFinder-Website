import { Component, inject, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarRef, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customsnack',
  template:`
    <mat-form-field appearance="fill">
    <mat-label>Horizontal position</mat-label>
    <mat-select [(value)]="horizontalPosition">
      <mat-option value="start">Start</mat-option>
      <mat-option value="center">Center</mat-option>
      <mat-option value="end">End</mat-option>
      <mat-option value="left">Left</mat-option>
      <mat-option value="right">Right</mat-option>
    </mat-select>
  </mat-form-field>
  <mat-form-field appearance="fill">
    <mat-label>Vertical position</mat-label>
    <mat-select [(value)]="verticalPosition">
      <mat-option value="top">Top</mat-option>
      <mat-option value="bottom">Bottom</mat-option>
    </mat-select>
  </mat-form-field>
  <button mat-stroked-button (click)="openSnackBar()" aria-label="Show an example snack-bar">
    <mat-icon aria-hidden="false" aria-label="Example home icon" fontIcon="check"></mat-icon>
  </button>
  `,
  styleUrls: ['./customsnack.component.scss']
})
export class CustomsnackComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) { }
  snackBarRef = inject(MatSnackBarRef);

  ngOnInit(): void { };

  openSnackBar() {
    this._snackBar.open('Cannonball!!', 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }




}
