export class Turma {
    numero: number;
    nome: string;
    diaSemana: string;
    turno: string;
    

    constructor(numero: number,
                nome: string,
                diaSemana: string,
                turno: string) {

        this.numero = numero;
        this.nome = nome;
        this.diaSemana = diaSemana;
        this.turno = turno;
        
    }
}