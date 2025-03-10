import { Carro } from "./Carro.js"; // Caminho deve ser exato

document.getElementById("botao").addEventListener("click", () => {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = parseInt(document.getElementById("ano").value);
    const cor = document.getElementById("cor").value;
    const km = parseFloat(document.getElementById("km").value);
    const valorFipe = parseFloat(document.getElementById("valor_fipe").value);

    if (!marca || !modelo || isNaN(ano) || !cor || isNaN(km) || isNaN(valorFipe)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    const carro = new Carro(marca, modelo, ano, cor, km, valorFipe);

    document.getElementById("resultado").innerHTML = `
        <strong>Marca:</strong> ${carro.marca} <br>
        <strong>Modelo:</strong> ${carro.modelo} <br>
        <strong>Ano:</strong> ${carro.ano} <br>
        <strong>Cor:</strong> ${carro.cor} <br>
        <strong>Anos de Utilização:</strong> ${carro.anosUtilizacao()} anos <br>
        <strong>Valor de Mercado:</strong> R$ ${carro.valorMercado()}
    `;
});
