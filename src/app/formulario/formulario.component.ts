import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Vingador} from '../vingador';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
    
    @Input()
    novo: Vingador;

    @Output()
    onExcluir = new EventEmitter<Vingador>();

    @Output()
    onEditar = new EventEmitter<Vingador>();

    @Output()
    onCadastrar = new EventEmitter<Vingador>();

    constructor() { } 
    
    ngOnInit() {
    }

    editar(vingador: Vingador): void{
    this.onExcluir.emit(vingador);
    }

    cadastrar(): void{
    this.onCadastrar.emit(this.novo);
    }

   

    

}
