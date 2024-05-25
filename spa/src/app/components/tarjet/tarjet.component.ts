import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjet',
  templateUrl: './tarjet.component.html',
  styleUrl: './tarjet.component.css'
})
export class TarjetComponent implements OnInit{

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeEscogido: EventEmitter<number>;

 constructor(private router:Router){
  this.heroeEscogido = new EventEmitter();
 }

 ngOnInit(){
  
 }

 verHeroe(){
  //console.log(this.index);
  this.router.navigate(['/heroe', this.index]);
  //this.heroeEscogido.emit(this.index);
 }

 
}