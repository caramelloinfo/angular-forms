import { Component, OnInit } from '@angular/core';
import '../assets/css/style.css';
import { Aluno } from './aluno';
import { Turma } from './turma';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    alunos: Array<Aluno>;
    aluno_atual: Aluno = new Aluno(0,'', 1);
    media_turma: number = null;
    turmas: Array<Turma>;
    turma_atual: Turma = new Turma(null);
    idTurma: number = null;
    editando = false;
    idAluno = 4

    constructor() {
        this.alunos = [
            new Aluno(1, 'Paulo', 1001, 5.0, 5.0, 4.0, 3.0, 100),
            new Aluno(2, 'Maria', 1002, 8.0, 7.0, 8.0, 10.0, 175),
            new Aluno(3, 'Joao', 1001),
            new Aluno(4, 'Joana', 1003)
        ];
        this.calcularMediaDaTurma();
        this.turmas = [
            new Turma(1001),
            new Turma(1002),
            new Turma(1003)
        ]
    }

    calcularMediaDaTurma() {
            let acumulador: number = 0;
            let denominador: number = 0;
            for (let i = 0; i < this.alunos.length; i++) {
                let media = this.alunos[i].media();
                if (this.alunos[i].turma == this.idTurma){
                    if (media) {
                        acumulador += media;
                        denominador++;
                    }
                }
            }
            if (acumulador == 0 && denominador == 0) {
                this.media_turma = null;
            } else {
                this.media_turma = acumulador / denominador;
            }
    }

    registrar(aluno: Aluno) {
        this.aluno_atual = aluno;
        this.editando = true    }

    salvar() {
        this.aluno_atual = new Aluno(0,'', 1);
        this.editando = false;
        this.calcularMediaDaTurma();
    }

    limpar() {
        this.aluno_atual.nota1 = null;
        this.aluno_atual.nota2 = null;
        this.aluno_atual.nota3 = null;
        this.aluno_atual.nota4 = null;
        this.aluno_atual.frequencia = null;
        this.calcularMediaDaTurma();
    }

    ngOnInit(): void {
    }

    cadastrarTurma(): void {
        this.turmas.push(new Turma(this.turma_atual.id));
        this.turma_atual = new Turma(null);
    }

    limparTurma(): void{
        this.turma_atual.id = null;
    }

    excluirTurma(turma: Turma): void{
        for (let i = 0; i < this.turmas.length; i++){
            if (this.turmas[i].id == turma.id) {
                this.turmas.splice(i, 1);
                this.excluirAlunosTurma(turma.id);
                break;
            }
        }
    }

    excluirAlunosTurma(turma : number){
        for (let i = 0; i < this.alunos.length; i++){
            if (this.alunos[i].turma == turma) {
                this.alunos.splice(i, 1);
            }
        }  
    }

    visualizarTurma(id: number): void{
        this.idTurma = id;
        this.calcularMediaDaTurma()   
    }

    cadastrarAlunoTurma(): void {
        if(!this.editando){
            const novo_id: number = ++this.idAluno;
            this.alunos.push(new Aluno(novo_id ,this.aluno_atual.nome, this.idTurma, this.aluno_atual.nota1, this.aluno_atual.nota2, this.aluno_atual.nota3, this.aluno_atual.nota4, this.aluno_atual.frequencia));
            this.aluno_atual = new Aluno(0,'', 1);
            this.calcularMediaDaTurma()   
        }
        else{
            this.aluno_atual = new Aluno(0,'', 1);
            this.editando = false;
        }
    }


    excluirAluno(aluno: Aluno): void{
        for (let i = 0; i < this.alunos.length; i++){
            if (this.alunos[i].id == aluno.id) {
                this.alunos.splice(i, 1);
                break;
            }
        }
    }
}