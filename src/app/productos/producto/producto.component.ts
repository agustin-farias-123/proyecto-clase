import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

import {  FormGroup, FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-producto',
  imports: [FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
/*
  productos =  [
  {nombre: 'Producto 1', precio: 100},
  {nombre: 'Producto 2', precio: 200},
  {nombre: 'Producto 3', precio: 300}
];

usuario = {
  nombre: 'thomas',
  activo: true
};
*/
usuario={
  nombre:''
}
}

