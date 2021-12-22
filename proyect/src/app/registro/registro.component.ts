import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario:FormGroup

  constructor(
    private fb:FormBuilder
  ) { 
    this.formulario= this.fb.group({
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      mail: ["", [Validators.required]],
      password: ["", [Validators.required]]

    })
  }

  registrarse(){
    console.log(this.formulario.value)
  }

  ngOnInit(): void {
  }

}
