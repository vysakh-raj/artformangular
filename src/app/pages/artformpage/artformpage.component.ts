import { Component } from '@angular/core';
import { data } from 'src/assets/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artformpage',
  templateUrl: './artformpage.component.html',
  styleUrls: ['./artformpage.component.css']
})
export class ArtformpageComponent {
  constructor(private router:Router){}
artform=data
gotoHere(id: any){
  localStorage.setItem('id',id);
  this.router.navigate(['/singlepage']);
}
}