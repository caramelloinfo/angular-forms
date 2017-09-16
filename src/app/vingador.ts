export class Vingador {
    id: number;
    nome: string;
    pessoa: string;
    urlFoto: string;
    

    constructor(id: number, nome: string, pessoa: string, urlFoto?:string) 
    {
        this.id = id;
        this.nome = nome;
        this.pessoa = pessoa;
        this.urlFoto= urlFoto;
    }
}