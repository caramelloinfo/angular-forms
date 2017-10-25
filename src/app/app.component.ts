import { Component, OnInit } from '@angular/core';
import '../assets/css/style.css';
import { Aluno } from './aluno';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    alunos: Array<Aluno>;
    aluno_atual: Aluno = new Aluno('', 1);

    media_turma: number = null;

    constructor() {
        this.alunos = [
            new Aluno('Paulo', 1, 5.0, 5.0, 4.0, 3.0, 100),
            new Aluno('Maria', 1, 8.0, 7.0, 8.0, 10.0, 175),
            new Aluno('Joao', 1),
            new Aluno('Joana', 1)
        ];
        this.calcularMediaDaTurma();
    }

    calcularMediaDaTurma() {
        let acumulador: number = 0;
        let denominador: number = 0;
        for (let i = 0; i < this.alunos.length; i++) {
            let media = this.alunos[i].media();
            if (media) {
                acumulador += media;
                denominador++;
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
    }

    salvar() {
        this.aluno_atual = new Aluno('', 1);
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


}
