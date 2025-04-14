import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  imports: [NgFor,FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
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

usuario={
  nombre:''
}*/
productos =[
{img: 'https://http2.mlstatic.com/D_NQ_NP_873315-MLA82763456643_022025-O.webp', nombre:'botines', precio:2000},
{img: '', nombre: '', precio:2000},
{img: '', nombre: '', precio:2000},  
{img: '', nombre: '', precio:2000},  
{img: '', nombre: '', precio:2000}    

];

}
