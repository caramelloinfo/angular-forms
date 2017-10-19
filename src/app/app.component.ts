import { Component, OnInit } from '@angular/core';
import { AlunoTurma } from './alunoTurma';
import { Turma } from './turma';
import '../assets/css/style.css';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    novo: AlunoTurma = new AlunoTurma('', new Turma(null, '', '', ''), null, null, null, null, null, null, null, "N/I");
    nova: Turma = new Turma(null, '', '', '');
    alunos: Array<AlunoTurma>;
    turmas: Array<Turma>;

    title: string;
    
    selecionado: AlunoTurma;
    editando = false;
    mediando: number;
    cont = 0;
    mediaDaTurma: number;
    mediaA: number;
   
    constructor() {
        this.title = 'Alunos';
        this.turmas = [
            new Turma(2020, 'Turma Teste 01', 'Segunda-Feira', 'Noturno'),
            new Turma(2021, 'Turma Teste 02', 'Terça-Feira', 'Noturno'),
            new Turma(2022, 'Turma Teste 03', 'Quarta-Feira', 'Noturno'),
            new Turma(2023, 'Turma Teste 04', 'Quinta-Feira', 'Noturno'),
            new Turma(2024, 'Turma Teste 05', 'Sexta-Feira', 'Noturno'),
            new Turma(2025, 'Turma Teste 06', 'Sábado-Feira', 'Matutino'),
        ];
        this.alunos = [
            new AlunoTurma('Carol Danvers', this.turmas[0], null, null, null, null, null, null, null, "N/I"),
            new AlunoTurma('Clint Barton', this.turmas[1], null, null, null, null, null, null, null, "N/I"),
            new AlunoTurma('Natasha Romanoff', this.turmas[2], null, null, null, null, null, null, null, "N/I"),
            new AlunoTurma('Steve Rogers', this.turmas[3], null, null, null, null, null, null, null, "N/I"),
            new AlunoTurma('Wade Wilson', this.turmas[4], null, null, null, null, null, null, null, "N/I"),
        ];
        
    }

    ngOnInit(): void {
    }

    heroiSelecionado(aluno: AlunoTurma): void {
        this.selecionado = aluno;
    }

    listaAluno(): void{
        for (let i=0; i< this.alunos.length; i++){
            if (this.turmas[i] == this.alunos[i].turma){
                this.alunos[i].turma[0] = this.turmas;
                
            } 
        }
    }
    
    mediaAluno(): void{
      let notaNull = '';
      let nota1: number = 0;
      let nota2: number = 0;
      let nota3: number = 0;
      let nota4: number = 0;
      let notaValidaa = 0;
      let mediaA: number = 0;
      let mediaTurma: number = 0;
      let contAluno= 0;
      let acumulaMedia: number = 0;
      let acumulaNota: number = 0;
      let contMedia: number = 0; //contador de notas válidas 
      
     
      for (let i=0; i< this.alunos.length; i++){
        nota1 = (Number(this.alunos[i].bim1));
        nota2 = (Number(this.alunos[i].bim2));
        nota3 = (Number(this.alunos[i].bim3));
        nota4 = (Number(this.alunos[i].bim4));
        notaValidaa = (Number(this.alunos[i].notaValida));
        
        if(nota1 != 0){notaValidaa = notaValidaa + 1; contMedia = contMedia +1;}
        if(nota2 != 0){notaValidaa = notaValidaa + 1; contMedia = contMedia +1;}
        if(nota3 != 0){notaValidaa = notaValidaa + 1; contMedia = contMedia +1;}
        if(nota4 != 0){notaValidaa = notaValidaa + 1; contMedia = contMedia +1;}
       
        acumulaNota = acumulaNota+nota1+nota2+nota3+nota4; 
        this.alunos[i].media = (nota1+nota2+nota3+nota4)/notaValidaa;
        this.mediaDaTurma = acumulaNota/(contMedia);
      }
      
    }
    encontrar(nome: string): number{
        console.log("excluindo...", nome);
        let indice = -1;
        for (let i=0; i< this.alunos.length; i++){
            if(this.alunos[i].nome == nome){
                indice = i;
                //i= this.vingadores.length;
                break;
            }
        }
        return indice;
    }

    encontrarTurma(nome: string): number{
        console.log("excluindo...", nome);
        let indice = -1;
        for (let i=0; i< this.turmas.length; i++){
            if(this.turmas[i].nome == nome){
                indice = i;
                //i= this.vingadores.length;
                break;
            }
        }
        return indice;
    }

    cadastrar(): void {
        this.mediaAluno();
        this.situacaoAluno();
        if(!this.editando){
            this.alunos.push(new AlunoTurma(this.novo.nome, 
                                       this.novo.turma, 
                                       this.novo.bim1, 
                                       this.novo.bim2, 
                                       this.novo.bim3, 
                                       this.novo.bim4, 
                                       this.novo.media, 
                                       this.novo.frequencia, 
                                       this.novo.notaValida,
                                       this.novo.situacaoFinal));
            this.novo = new AlunoTurma('',
                                  null, 
                                  null, 
                                  null,
                                  null, 
                                  null, 
                                  null, 
                                  null, 
                                  null, "N/I");
            console.log("Com inclusão de alunos...");
        }
        else{
            this.novo = new AlunoTurma('', null, null, null,null, null, null, null, null, "N/I");
            this.editando = false;
            console.log("Sem inclusão de alunos...");
        }
        this.mediaAluno();
        this.situacaoAluno();
      }


    cadastrarTurma(): void {
        if(!this.editando){
            this.turmas.push(new Turma(this.nova.numero,
                                       this.nova.nome,
                                       this.nova.diaSemana,
                                       this.nova.turno,));
            this.nova = new Turma(null, '', '', '');
            console.log("Com inclusão de turmas...");
        }
        else{
            this.nova = new Turma(null, '', '', '');
            this.editando = false;
            console.log("Sem inclusão de turmas...");
        }
      }


    editar(aluno: AlunoTurma): void{
        const indice = this.encontrar(aluno.nome);

        if(indice !== -1){
            this.novo = this.alunos[indice];
            this.editando = true;
            console.log("Registrar...");
        }
    }

    editarTurma(turma: Turma): void{
        const indice = this.encontrarTurma(turma.nome);

        if(indice !== -1){
            this.nova = this.turmas[indice];
            this.editando = true;
            console.log("Registrar...");
        }
    }
    
    situacaoAluno(): void{
      let af: number = 0;
      
      for (let i=0; i< this.alunos.length; i++){
        af = this.alunos[i].frequencia;
        if (af <= 150 && af != null){
          this.alunos[i].situacaoFinal = "REPROVADO POR FALTA"
        }
        else{
          if (this.alunos[i].media >= 7){
            this.alunos[i].situacaoFinal= "APROVADO";
          }
          else{
            if (this.alunos[i].media < 7 && this.alunos[i].media != null){
              this.alunos[i].situacaoFinal= "REPROVADO";
            }
            else{
              this.alunos[i].situacaoFinal = "N/I";
            }
          }
        }
      }
    }

    excluirAluno(nome: string): void {
        const indice = this.encontrar(nome);
        if (indice !== -1) {
            this.alunos.splice(indice, 1);
            this.novo = new AlunoTurma('', null, null, null, null, null, null, null, null, "N/I");
        }
    }

    excluirTurma(nome: string): void {
        const indice = this.encontrarTurma(nome);
        if (indice !== -1) {
            this.turmas.splice(indice, 1);
            this.nova = new Turma(null, '', '', '');
        }
    }

     executar(): void{
        this.mediaAluno();
        this.situacaoAluno();
    }
}
