import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformpageComponent } from './pages/artformpage/artformpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
path:'contact',component:ContactpageComponent
  },
  {
    path:'signup',component:SignupPageComponent
  },
  {
    path:'artform',component:ArtformpageComponent
  },
  {
    path:'singlepage',component:SinglepageComponent
  },
  {
    path:'login',component:LoginpageComponent
  },
  {
    path:'artform',component:ArtformpageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
