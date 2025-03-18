const container = document.getElementById("container");

function Pessoa() {
    this.total = 0;
}

function Homem() {
    Pessoa.call(this);
    this.contador = 0;
}

function Mulher() {
    Pessoa.call(this);
    this.contador = 0;
}

const homens = new Homem();
const mulheres = new Mulher();

const tituloTotal = document.createElement("h1");
tituloTotal.textContent = "Total";
container.appendChild(tituloTotal);

const btnReset = document.createElement("button");
btnReset.textContent = "Resetar";
btnReset.onclick = function () {
    homens.contador = 0;
    mulheres.contador = 0;
    atualizarContadores();
};

container.appendChild(btnReset);

const inputTotal = document.createElement("input");
inputTotal.type = "text";
inputTotal.value = 0;
inputTotal.readOnly = true;
container.appendChild(inputTotal);

function criarBloco(tipo, instancia, imagemLink) {
    const bloco = document.createElement("div");
    bloco.classList.add("bloco");

    const img = document.createElement("img");
    img.src = imagemLink; 
    img.alt = tipo;
    img.style.display = "block"; 
    bloco.appendChild(img);

    const btnAdicionar = document.createElement("button");
    btnAdicionar.textContent = "+";
    btnAdicionar.onclick = function () {
        instancia.contador++;
        instancia.total++;
        atualizarContadores();
    };

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "-";
    btnRemover.onclick = function () {
        if (instancia.contador > 0) {
            instancia.contador--;
            instancia.total--;
            atualizarContadores();
        }
    };

    bloco.appendChild(btnAdicionar);
    bloco.appendChild(btnRemover);

    const rotulo = document.createElement("p");
    rotulo.textContent = tipo;
    bloco.appendChild(rotulo);

    const input = document.createElement("input");
    input.type = "text";
    input.value = 0;
    input.readOnly = true;
    bloco.appendChild(input);

    instancia.input = input;

    container.appendChild(bloco);
}

const imagemHomem = "img/iconeHomem.png";
const imagemMulher = "img/iconeMulher.png"; 

criarBloco("Homens", homens, imagemHomem);
criarBloco("Mulheres", mulheres, imagemMulher);

function atualizarContadores() {
    homens.input.value = homens.contador;
    mulheres.input.value = mulheres.contador;
    inputTotal.value = homens.contador + mulheres.contador;
}
