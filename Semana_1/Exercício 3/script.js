document.getElementById("botao").addEventListener("click", 
    () => {
        let numero = parseInt(document.getElementById('numero').value);
    
        if (isNaN(numero) || numero < 0) {
            alert("Por favor, digite um número inteiro positivo.");
            return;
        }
    
        let fatorial = 1;
        for (let i = 2; i <= numero; i++) // o valor de i começa no 2, porque é desncessário multiplicar por 1.
        {
            fatorial *= i;
        }
    
        alert(`O fatorial de ${numero} é ${fatorial}`);
    }
);
