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
    ultimo_id = 5;
    editando = false;
    
    constructor() {
        this.title = 'Vingadores';
        this.vingadores = [
            new Vingador(1, 'Capitão América', 'Steve Rogers'),
            new Vingador(2, 'Viúva Negra', 'Natasha Romanoff'),
            new Vingador(3, 'Ms. Marvel', 'Carol Danvers'),
            new Vingador(4, 'Deadpool', 'Wade Wilson'),
            new Vingador(5, 'Gavião Arqueiro', 'Clint Barton'),
        ];
    }

    ngOnInit(): void {
    }

    heroiSelecionado(vingador: Vingador): void {
        this.selecionado = vingador;
    }

    
    encontrar(id: number): number{
        let indice = -1;
        for(let i=0; i <this.vingadores.length; i++){
            if(this.vingadores[i].id == id){
                indice = i;
                break;

            }
        }
        return indice;
        
    }

    cadastrar(vingador: Vingador): void {
      if(!this.editando){
          const novoId: number = ++this.ultimo_id;
          this.vingadores.push(new Vingador(novoId, vingador.nome, vingador.pessoa));
          this.novo = new Vingador(0, '', '');
      }
      else{
          this.novo = new Vingador(0, '', '');
          this.editando = false;
      }
      
    }

    excluir(heroi: Vingador): void{
        this.vingadores.splice(this.vingadores.indexOf(heroi), 1);
        this.novo = new Vingador(0, '', '');;
           
    }        
    
    editar(heroi: Vingador): void{
        this.novo = heroi;
        this.editando = true;
    }

    
   
}
