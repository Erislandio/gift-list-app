export interface TipoDeCesta {
    id: string;
    link: string;
    nome: string;
    imagem: Imagem[];
    descricao: Descricao;
    materialDaCestas: MaterialDaCesta[];
}

export interface Imagem {
    url: string;
}

export interface Descricao {
    html: string;
}

export interface MaterialDaCesta {
    id: string;
    nome: string;
    preco: number;
    imagem: Imagem2;
}

export interface Imagem2 {
    url: string;
}