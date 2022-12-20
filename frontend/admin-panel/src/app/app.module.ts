import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlacedetailComponent } from './components/placedetail/placedetail.component';
import {MatIconModule} from '@angular/material/icon';
import { EditblogComponent } from './components/editblog/editblog.component';
import { LoginComponent } from './components/login/login.component';
import { DialoghomeComponent } from './components/home/dialoghome/dialoghome.component';
import {MatMenuModule} from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddnewplaceComponent } from './components/home/addnewplace/addnewplace.component';
import { DialognewdetailComponent } from './components/placedetail/dialognewdetail/dialognewdetail.component';
import { NewblogdialogComponent } from './components/editblog/newblogdialog/newblogdialog.component';
import { EditdetailComponent } from './components/placedetail/editdetail/editdetail.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {MatTooltip, MatTooltipModule} from '@angular/material/tooltip';
import { LoaderComponent } from './shared/loader/loader.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CustomsnackComponent } from './components/customsnack/customsnack.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EditblogdialogComponent } from './components/editblog/editblogdialog/editblogdialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlacedetailComponent,
    EditblogComponent,
    LoginComponent,
    DialoghomeComponent,
    AddnewplaceComponent,
    DialognewdetailComponent,
    NewblogdialogComponent,
    EditdetailComponent,
    NavbarComponent,
    LoaderComponent,
    CustomsnackComponent,
    FooterComponent,
    EditblogdialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressBarModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DATA, useValue: []},
],  bootstrap: [AppComponent]
})
export class AppModule { }
