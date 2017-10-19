import { Turma } from './turma';
export class AlunoTurma {
    nome: string;
    turma: Turma;
    bim1: number;
    bim2: number;
    bim3: number;
    bim4: number;
    media: number;
    frequencia: number;
    notaValida: number;
    situacaoFinal: string;

    constructor( nome: string, 
                turma: Turma, 
                bim1: number, 
                bim2: number, 
                bim3: number, 
                bim4: number, 
                media?: number, 
                frequencia?: number, 
                notaValida?: number, 
                situacaoFinal?: string) {
        this.nome = nome;
        this.turma = turma;
        this.bim1 = bim1;
        this.bim2 = bim2;
        this.bim3 = bim3;
        this.bim4 = bim4;
        this.media = media;
        this.frequencia = frequencia;
        this.notaValida = notaValida;
        this.situacaoFinal = situacaoFinal;
    }
}