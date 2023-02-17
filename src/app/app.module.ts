import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { ArtformpageComponent } from './pages/artformpage/artformpage.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactpageComponent,
    ArtformpageComponent,
    SignupPageComponent,
    SinglepageComponent,
    NavbarComponent,
    FooterComponent,
    LoginpageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
