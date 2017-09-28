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
    novo: Vingador = new Vingador(0, '', '', '');
    ultimo_id = 6;
    editando = false;
    
    constructor() {
        this.title = 'Vingadores';
        this.vingadores = [
            new Vingador(1, 'Capitão América', 'Steve Rogers', 'https://i.pinimg.com/736x/6d/3b/49/6d3b49e28043201b282d6aa306ecc09d--marvel-comics-blog-layout.jpg'),
            new Vingador(2, 'Viúva Negra', 'Natasha Romanoff', 'https://pbs.twimg.com/profile_images/3753957705/c827cf86af6f686549e440ad8c994e3f.jpeg'),
            new Vingador(3, 'Ms. Marvel', 'Carol Danvers', 'https://static.comicvine.com/uploads/scale_small/11/113509/4382625-6282486567-12289.jpg'),
            new Vingador(4, 'Deadpool', 'Wade Wilson', 'http://s3.foxmovies.com/foxmovies/production/films/103/images/featured_content/111-front.jpg'),
            new Vingador(5, 'Gavião Arqueiro', 'Clint Barton', 'https://s.aficionados.com.br/imagens/hawkeye-lol_cke.jpg'),
            new Vingador(6, 'Homem de Ferro', 'Tony Stark', 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/Invincible_Iron_Man_Vol_2_2.jpg/220px-Invincible_Iron_Man_Vol_2_2.jpg')
        ];
    }

    ngOnInit(): void {
    }

    heroiSelecionado(vingador: Vingador): void {
        this.selecionado = vingador;
    }

    cadastrar(): void {
        if(!this.editando){
            const novoId: number = ++this.ultimo_id;
            this.vingadores.push(new Vingador(novoId, this.novo.nome, this.novo.pessoa, this.novo.urlFoto));
            this.novo = new Vingador(0, '', '', '');
        }
        else{
            this.novo = new Vingador(0, '', '', '');
            this.editando = false;
        }
        
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

    excluir(id: number): void{
        //console.log('excluindo...',id)
        let indice = this.encontrar(id);
        if (indice != -1){
            this.vingadores.splice(indice, 1);
            this.novo = new Vingador(0, '', '', '');;

            }
        }
        
    
    editar(id: number): void{
        const indice = this.encontrar(id);
            if (indice != -1){
                this.novo = this.vingadores[indice];
                this.editando = true;
            }

    }
   
}
