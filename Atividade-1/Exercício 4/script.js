function verificarTipoDado() {
    let dado = prompt("Digite um valor:");

    if (dado === null) {
        document.body.innerHTML = "<p>Obrigado por visitar esta página.</p>";
        return;
    }

    let desejaVerificar = confirm("Você deseja verificar o tipo do dado informado?");
    
    if (desejaVerificar) {
        let tipo = typeof dado;

        
        if (!isNaN(dado) && dado.trim() !== "") {
            tipo = "number";
        }

        document.body.innerHTML = `<p>O tipo do dado informado é: <strong>${tipo}</strong></p>`;
    } else {
        document.body.innerHTML = "<p>Obrigado por visitar esta página.</p>";
    }
}
