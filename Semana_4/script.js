function Pessoa(nome, email, dataNascimento, telefoneFixo, telefoneCelular) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.telefoneFixo = telefoneFixo;
        this.telefoneCelular = telefoneCelular;
    }

function Professor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, area, lattes) {
        Pessoa.call(this, nome, email, dataNascimento, telefoneFixo, telefoneCelular);
        this.area = area;
        this.lattes = lattes;
    }
Professor.prototype = Object.create(Pessoa.prototype);
Professor.prototype.constructor = Professor;

function Aluno(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula) {
        Pessoa.call(this, nome, email, dataNascimento, telefoneFixo, telefoneCelular);
        this.matricula = matricula;
    }
Aluno.prototype = Object.create(Pessoa.prototype);
Aluno.prototype.constructor = Aluno;

document.querySelectorAll("input[name='tipo']").forEach(input => {
    input.addEventListener("change", function() {
        const extraFields = document.getElementById("extraFields");
        extraFields.innerHTML = "";

        if (this.value === "Professor") {
            extraFields.innerHTML = `
                <div class="mb-3">
                    <label class="form-label">Área de Atuação:</label>
                    <input type="text" class="form-control" id="area" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Lattes:</label>
                    <input type="url" class="form-control" id="lattes" required>
                </div>
            `;
        } else if (this.value === "Aluno") {
            extraFields.innerHTML = `
                <div class="mb-3">
                    <label class="form-label">Matrícula:</label>
                    <input type="text" class="form-control" id="matricula" required>
                </div>
            `;
        }
    });
});

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // não deixa recarregar a página (para usar a função de redefinir)
        
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const telefoneFixo = document.getElementById("telefoneFixo").value;
    const telefoneCelular = document.getElementById("telefoneCelular").value;
    const tipo = document.querySelector("input[name='tipo']:checked").value;

    let pessoa;

    if (tipo === "Professor") {
        const area = document.getElementById("area").value;
        const lattes = document.getElementById("lattes").value;
        pessoa = new Professor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, area, lattes);
    } else if (tipo === "Aluno") {
        const matricula = document.getElementById("matricula").value;
        pessoa = new Aluno(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula);
    }

    
    document.getElementById("resultado").textContent = JSON.stringify(pessoa, null, 4); // exibe na tela
});