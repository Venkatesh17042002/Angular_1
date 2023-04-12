import { Component, Inject, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbox',
  templateUrl: './snackbox.component.html',
  styleUrls: ['./snackbox.component.scss']
})
export class SnackboxComponent {
  constructor( @Inject(MAT_SNACK_BAR_DATA) public data:any){}
  snackBarRef = inject(MatSnackBarRef);
  
}
