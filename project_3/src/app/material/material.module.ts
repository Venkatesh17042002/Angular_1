import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatSidenavModule, 
      MatListModule,
      MatIconModule ,
      FlexLayoutModule ,
      RouterModule,MatTableModule,
      MatPaginatorModule,
      MatSortModule
     

  ],
  exports:[
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatSidenavModule, 
      MatListModule,
      MatIconModule ,
        FlexLayoutModule ,
       RouterModule,
       MatTableModule,
       MatPaginatorModule,
       MatSortModule
  ]
})
export class MaterialModule { }