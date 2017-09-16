import { Component, OnInit } from '@angular/core';
import { Vingador } from './vingador';
import '../assets/css/style.css';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    vingadores: Array<Vingador>;
    selecionado: Vingador;
    novo: Vingador = new Vingador(0, '', '');
    
    constructor() {
        this.title = 'Vingadores';
        this.vingadores = [
            new Vingador(1, 'Capitão América', 'Steve Rogers'),
            new Vingador(2, 'Viúva Negra', 'Natasha Romanoff'),
            new Vingador(3, 'Ms. Marvel', 'Carol Danvers'),
            new Vingador(4, 'Deadpool', 'Wade Wilson'),
            new Vingador(5, 'Gavião Arqueiro', 'Clint Barton'),
            new Vingador(6, 'teste2', 'pessoa2')
        ];
    }

    ngOnInit(): void {
    }

    heroiSelecionado(vingador: Vingador): void {
        this.selecionado = vingador;
    }

    cadastrar(): void {
        const novoId: number = this.vingadores.length + 1;
        this.vingadores.push(new Vingador(novoId, this.novo.nome, this.novo.pessoa));
        this.novo = new Vingador(0, '', '');
        
    }

    delItem(item): void{
        delete this.vingadores[item-1];
    }
    
    heroiSelecApagar(vingador: Vingador, item): void {
        var apagado = vingador.id;
        const index = this.vingadores.indexOf(vingador);
        const elementoRemovido = this.vingadores.splice(index);
        
    }
    del(id){
        
        const index = this.vingadores.indexOf(id);
        const elementoRemovido = this.vingadores.splice(index);
   // aqui podes fazer algo com o item removido
   // a array modifica-se a si própria com o splice
}
   
}
