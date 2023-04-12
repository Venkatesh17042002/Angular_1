import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './core/template/child/child.component';
import { NavComponent } from './core/template/nav/nav.component';
import { ParentComponent } from './core/template/parent/parent.component';

const routes: Routes = [
  {
  path:"app",component:AppComponent,children:[
  {path:"nav",component:NavComponent},
  {path:"child",component:ChildComponent},
  {path:"parent",component:ParentComponent}]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

