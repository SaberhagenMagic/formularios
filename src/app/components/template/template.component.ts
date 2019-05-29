import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {
  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: '',
    acepta: false
  };

  paises = [{
    codigo: 'MEX',
    nombre: 'México'
  }, {
    codigo: 'COL',
    nombre: 'Colombia'
  }];

  constructor() { }

  guardar( forma: NgForm ) {
    console.log('Formulario enviado', forma);
    // console.log('valor', forma.value);

    // console.log('Usuario', this.usuario);

  }
}
