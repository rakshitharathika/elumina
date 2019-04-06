import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule,MatInputModule,MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,MatDatepicker,
    MatFormFieldModule,  MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule} from '@angular/material';
    import {MatDialogModule} from '@angular/material';
    import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildtcomponentComponent } from './childtcomponent/childtcomponent.component';
import { FormsModule , ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {NgxPrintModule} from 'ngx-print';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ParentcomponentComponent,
    ChildtcomponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
  
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    NgxPrintModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,
    MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule,DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
