import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombre:any = "Jeff"
  condicion:any = false
  nombre_persona:any = ""
  
  constructor() {}

  cambiarNombre() {
    this.nombre = "jose"
    this.condicion = true
  }

  bindeo(){
    this.nombre_persona = ""
  }

  ngOnInit(): void {
  }

}
