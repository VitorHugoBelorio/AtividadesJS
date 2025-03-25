const app = document.getElementById("app");

const calculator = document.createElement("div");
calculator.classList.add("calculator");

const display = document.createElement("div");
display.classList.add("display");
display.textContent = "0";
calculator.appendChild(display); // criando o visor e inserindo na div calculadora

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttons"); // criando os botões

// criando os layout dos botões
const buttons = [
    ["AC", "±", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "−"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]
];

// percorrer a minha matriz com o layout de botões para inserir na tela
buttons.forEach(row => {
    row.forEach(text => {
        const button = document.createElement("button");
        button.textContent = text;
        button.classList.add(
            isNaN(text) ? (text === "AC" ? "function" : "operator") : "number"
        );
        button.addEventListener("click", () => handleButtonClick(text));
        buttonContainer.appendChild(button);
    });
});

calculator.appendChild(buttonContainer);
app.appendChild(calculator);

let currentInput = ""; // armazena o número atual do visor
let previousInput = ""; // armazena o número anterior do visor
let operation = null;

function handleButtonClick(value) {
    if (!isNaN(value) || value === ".") {
        if (currentInput === "0" && value !== ".") {
            currentInput = value;
        } else {
            currentInput += value;
        }
    } else if (["+", "−", "×", "÷"].includes(value)) {
        previousInput = currentInput;
        currentInput = "";
        operation = value;
    } else if (value === "=") {
        if (previousInput && operation) {
            currentInput = calculate(previousInput, currentInput, operation);
            previousInput = "";
            operation = null;
        }
    } else if (value === "AC") {
        currentInput = "0";
        previousInput = "";
        operation = null;
    } else if (value === "±") {
        currentInput = (parseFloat(currentInput) * -1).toString();
    } else if (value === "%") {
        currentInput = (parseFloat(currentInput) / 100).toString();
    }

    display.textContent = currentInput;
}

function calculate(num1, num2, op) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    // com base na string de operação armazenada no parâmetro realiza a operação e ja converte para string para exibir o resultado no visor
    if (op === "+") return (a + b).toString();
    if (op === "−") return (a - b).toString();
    if (op === "×") return (a * b).toString();
    if (op === "÷") return (b !== 0 ? (a / b).toString() : "Erro");
}
