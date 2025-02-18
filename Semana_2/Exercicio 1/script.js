document.getElementById("botao").addEventListener("click", 
    () => {
        let hoje = new Date();
        let formatacao = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; // onde está long será escrito por extenso e onde está numeric é para deixar em formato numérico.
        let dataFormatada = hoje.toLocaleDateString('pt-BR', formatacao);
        return document.write(dataFormatada);
    }
);