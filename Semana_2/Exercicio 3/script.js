document.getElementById("botao").addEventListener("click", () => {
    const texto = document.getElementById('texto').value.toLowerCase();
    const palavras = texto.toLowerCase().split(" "); // quebra a frase em palavras
    
    const palavrasInvertidas = palavras.map(palavra => 
        palavra.replace(/[\W_]/g, '').split('').reverse().join('') // inverte cada palavra e junta depois
    );

    const textoInvertido = palavrasInvertidas.join(' ').toLowerCase();

    //console.log(texto); 
    //console.log(textoInvertido); 

    if (texto.toLowerCase().replace(/[\W_]/g, '') === textoInvertido.replace(/[\W_]/g, '')) {
        alert("É um palíndromo!");
    } else {
        alert("Não é um palíndromo.");
    }
});
