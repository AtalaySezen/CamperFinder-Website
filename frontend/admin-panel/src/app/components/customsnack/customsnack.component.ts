import { Component, inject, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarRef, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customsnack',
  templateUrl: './customsnack.component.html',
  styleUrls: ['./customsnack.component.scss']
})
export class CustomsnackComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'; 
  
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  snackBarRef = inject(MatSnackBarRef);

  openSnackBar() {
    this._snackBar.open('Cannonball!!', 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
