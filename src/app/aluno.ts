export class Aluno {
    constructor(
        public id: number,
        public nome: string,
        public turma: number,
        public nota1: number = null,
        public nota2: number = null,
        public nota3: number = null,
        public nota4: number = null,
        public frequencia: number = null) {
    }

    media(): number {
        let denominador: number = 0;
        let acumulador: number = 0;
        if (!this.nota1 && !this.nota2 && !this.nota3 && !this.nota4) {
            return null;
        }
        if (this.nota1) {
            denominador++;
            acumulador += this.nota1;
        }
        if (this.nota2) {
            denominador++;
            acumulador += this.nota2;
        }
        if (this.nota3) {
            denominador++;
            acumulador += this.nota3;
        }
        if (this.nota4) {
            denominador++;
            acumulador += this.nota4;
        }

        return +''+acumulador / denominador;
    }

    public situacao(): string {
        if (!this.media() || !this.frequencia) {
            return null;
        }
        if (this.frequencia < 150) {
            return 'REPROVADO POR FALTA';
        }
        if (this.media() >= 7.0) {
            return 'APROVADO';
        } else {
            return 'REPROVADO';
        }
    }


    atualiza(aluno:Aluno){
        //Atualiza os dados alterados em edição.
        this.nome = aluno.nome;
        this.frequencia = aluno.frequencia;
        this.nota1 = aluno.nota1;
        this.nota2 = aluno.nota2;
        this.nota3 = aluno.nota3;
        this.nota4 = aluno.nota4;
        this.media = aluno.media;
    }
}
