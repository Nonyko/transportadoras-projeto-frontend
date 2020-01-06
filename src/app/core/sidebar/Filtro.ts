export class Filtro{
    
    nome: string;
    quantidade:number;
    tipo: string;

    constructor(
        nome: string,
        quantidade: number,
        tipo: string) { 
            this.quantidade = quantidade; 
            this.nome = nome;
            this.tipo = tipo;
        }
}