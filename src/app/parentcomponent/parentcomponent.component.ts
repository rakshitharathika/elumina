import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {WebService} from '../web.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ChildtcomponentComponent } from '../childtcomponent/childtcomponent.component';
@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {
 fleetData;
  dataSource = new MatTableDataSource(this.fleetData);
  displayedColumns: string[] = ['region', 'name', 'demonym', 'nativeName','action'];
   @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialog: MatDialog,private webService: WebService,private router: Router) { }


ngOnInit() {
  this.getplan();
  this.dataSource.paginator = this.paginator;
  }
   getplan() {
   
   this.webService.getrestcountries().subscribe((data) => {
     this.fleetData = data;
    this.dataSource.data = this.fleetData;  

   });

      
   }

     preview(element) {
  
    const dialogRef = this.dialog.open(ChildtcomponentComponent,{
    height: '400px',
  width: '600px',
        data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

