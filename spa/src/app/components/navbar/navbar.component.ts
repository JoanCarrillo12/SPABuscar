import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router:Router){

  }

  buscarHeroe(term: string){
    //console.log(term);
    this.router.navigate(['/search', term])
  }
}