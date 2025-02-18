document.getElementById("botao").addEventListener("click", 
    () => {
        const texto = document.getElementById('texto').value;
        const textoLimpo = texto.replace(/[\W_]/g, '').toLowerCase();; // deixa tudo minusculo e remove caractéres especiais
        const textoInvertido = textoLimpo.split('').reverse().join('');
        
        if (textoLimpo === textoInvertido) {
            alert("É um palíndromo!");
        } 
        else {
            alert("Não é um palíndromo.");
        }
    }
)