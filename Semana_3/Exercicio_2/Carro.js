export class Carro {
    constructor(marca, modelo, ano, cor, km, valorFipe) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.km = km;
        this.valorFipe = valorFipe;
    }

    anosUtilizacao() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    }

    valorMercado() {
        const anosUso = this.anosUtilizacao();
        const kmAnual = this.km / (anosUso || 1);
        let valorMercado = this.valorFipe;

        if (kmAnual <= 30000) {
            valorMercado *= 1.1;
        } else if (kmAnual > 50000) {
            valorMercado *= 0.9;
        }

        return valorMercado.toFixed(2);
    }
}
