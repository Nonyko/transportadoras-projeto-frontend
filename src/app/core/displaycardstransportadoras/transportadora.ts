export class Transportadora{
    id:number;
    nome: string;
    codigo: string;
    telefone1: string;
    telefone2: string;
    whatsapp: string;
    email: string;
    modal: string[];
    cep: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;

    constructor(
        id:number,
        nome: string,
        codigo: string,
        telefone1: string,
        telefone2: string,
        whatsapp: string,
        email: string,
        modal: string[],
        cep: string,
        estado: string,
        cidade: string,
        bairro: string,
        rua: string,
        numero: number) { 
            this.id = id; 
            this.nome = nome;
            this.codigo = codigo;
            this.telefone1 = telefone1;
            this.telefone2 = telefone2;
            this.whatsapp = whatsapp;
            this.email = email;
            this.modal = modal;
            this.cep = cep;
            this.estado = estado;
            this.cidade = cidade;
            this.bairro = bairro;
            this.rua = rua;
            this.numero = numero;
        }
}