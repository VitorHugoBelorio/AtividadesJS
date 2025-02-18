document.getElementById("botao").addEventListener("click",
    () => {
        let numero = parseInt(document.getElementById('numero').value);
    
        if (isNaN(numero) || numero <= 0) {
            alert("O conteúdo digitado não é um número inteiro positivo.");
            return;
        }
    
        if (numero === 1) {
            alert(`O número ${numero} não é primo.`);
            return;
        }
    
        let primo = true;
        
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                primo = false;
                break;
            }
        }
    
        if (primo) {
            alert(`O número ${numero} é primo.`);
        } else {
            alert(`O número ${numero} não é primo.`);
        }
    }
 );


