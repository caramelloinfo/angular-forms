import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Vingador} from '../vingador';

@Component({
  selector: 'app-lista-de-herois',
  templateUrl: './lista-de-herois.component.html',
  styleUrls: ['./lista-de-herois.component.css']
})
export class ListaDeHeroisComponent implements OnInit {

  @Input()
  lista: Array<Vingador>;

  @Output()
  onExcluir = new EventEmitter<Vingador>();

  @Output()
  onEditar = new EventEmitter<Vingador>();

  @Output()
  onCadastrar = new EventEmitter<Vingador>();

  constructor() { }

  ngOnInit() {
  }
  
  excluir(vingador: Vingador): void{
    this.onExcluir.emit(vingador);
  }

  editar(vingador: Vingador): void{
    this.onEditar.emit(vingador);
  }

  cadastrar(vingador: Vingador): void{
    this.onCadastrar.emit(vingador);
  }

}
