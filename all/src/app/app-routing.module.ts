import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavPanelComponent } from './components/nav-panel/nav-panel.component';
import { SnackCComponent } from './components/snack-c/snack-c.component';
import { LoginComponent } from './components/login/login.component';
import { TableComponent } from './components/table/table.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ObservableComponent } from './components/observable/observable.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HttpComponent } from './components/http/http.component';

const routes: Routes = [
  {path:"",redirectTo:"nav/login",pathMatch:"full"},
 {path:"nav",component:NavPanelComponent,children:[
  {path:"snackbar",component:SnackCComponent},
  {path:"login",component:LoginComponent},
  {path:"table",component:TableComponent},
  {path:"form",component:FormFieldComponent},
  {path:"pipe",component:PipeComponent},
  {path:"changepassword",component:ChangePasswordComponent},
  {path:"observable",component:ObservableComponent},
  {path:"directives",component:DirectivesComponent},
  {path:"http",component:HttpComponent},

 ]},
 
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
