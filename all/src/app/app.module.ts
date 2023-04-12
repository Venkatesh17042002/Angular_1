import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPanelComponent } from './components/nav-panel/nav-panel.component';
import { LoginComponent } from './components/login/login.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { SnackCComponent } from './components/snack-c/snack-c.component';
import { SnackboxComponent } from './components/snackbox/snackbox.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { TableComponent } from './components/table/table.component';
import { FormFieldComponent } from './components/form-field/form-field.component';

import { MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import { PipeComponent } from './components/pipe/pipe.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ObservableComponent } from './components/observable/observable.component';
import { CamelPipe } from './Pipes/camel.pipe';
import { VrowDirective } from './directives/vrow.directive';
import { DirectivesComponent } from './components/directives/directives.component';
import { HttpComponent } from './components/http/http.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavPanelComponent,
    LoginComponent,
    SnackbarComponent,
    SnackCComponent,
    SnackboxComponent,
    TableComponent,
    FormFieldComponent,
    PipeComponent,
    FilterPipe,
    ChangePasswordComponent,
    ObservableComponent,
    CamelPipe,
    VrowDirective,
    DirectivesComponent,
    HttpComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    // FormControl,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatIconModule,
    FlexLayoutModule,
    HttpClientModule
    
  ],
  exports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    // FormControl,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
