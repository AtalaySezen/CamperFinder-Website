import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { LoaderComponent } from './shared/loader/loader.component';
import { HomeDialogComponent } from './components/home/home-dialog/home-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDialogComponent } from './components/blog/blog-dialog/blog-dialog.component';
import { MailComponent } from './components/mail/mail.component';
import { PlacedetailComponent } from './components/placedetail/placedetail.component';
import { MailDialogComponent } from './components/mail/mail-dialog/mail-dialog.component';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { AngularFireModule } from '@angular/fire/compat';
import {firebaseconfig} from 'src/environments/firebaseconfig.prod';
import { PlacedetailDialogComponent } from './components/placedetail/placedetail-dialog/placedetail-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    LoaderComponent,
    HomeDialogComponent,
    BlogComponent,
    BlogDialogComponent,
    MailComponent,
    PlacedetailComponent,
    MailDialogComponent,
    PlacedetailDialogComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatIconModule,
    AppRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseconfig),
    
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
