import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { SnackbarComponent } from './snackbar/snackbar.component';
const routes:Routes=[
  {path:'',component:HeaderComponent},
  {path:'home',component:HomeComponent},  
  {path:'story',component:StoryComponent},
  {path:'product',component:ProductComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent},
  {path:'snackbar',component:SnackbarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StoryComponent,
    ProductComponent,
    ContactComponent,
    LoginComponent,
    CartComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
