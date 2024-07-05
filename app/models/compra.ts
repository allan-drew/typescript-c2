export class Compra {

    // private é a sintaxe moderna do TS p/ indicar atributos privados
    private _data: Date; // underline é uma convenção de nomenclatura para atributos privados
    private _quantidade: number;
    private _valor: number;

    constructor (data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    
    get data(): Date {
        // programação defensiva:
        const data = new Date(this._data.getTime()); // criando uma nova referência para a data dentro de Compra.
                                        // São datas idênticas, com referências diferentes.
        return data;  // essa nova referência impede a modificação da data original (_data)...
                      // ....usando o compra.data.setDate() no controller
        // return this._data; // ----> anterior
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }
}

