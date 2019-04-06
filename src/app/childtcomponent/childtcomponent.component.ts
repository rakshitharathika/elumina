import { Component, Inject,OnInit  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-childtcomponent',
  templateUrl: './childtcomponent.component.html',
  styleUrls: ['./childtcomponent.component.css']
})
export class ChildtcomponentComponent implements OnInit {
editplandetail : any = {};
  constructor( public dialogRef: MatDialogRef<ChildtcomponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { 
   
 
    }
 
 onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
