// Variáveis para armazenar os números e a operação atual
let num1 = '';
let num2 = '';
let operator = '';

// Selecionando o parágrafo de mensagem de erro
const errorMessage = document.getElementById('error-message');

// Função para limpar o campo de entrada e redefinir variáveis
function clearInput() {
    input.value = '';
    num1 = '';
    num2 = '';
    operator = '';
    errorMessage.textContent = ''; // Limpa a mensagem de erro
}

// Função para atualizar o campo de entrada
function updateInput(value) {
    // Adiciona o valor ao final do campo input
    input.value += value;
}

// Função para exibir mensagem de erro
function showError(message) {
    errorMessage.textContent = message;
}

// Event listener para a vírgula (`,` - usado no Brasil)
vir.addEventListener('click', () => {
    // Verifica se já existe uma vírgula no número atual
    if (!input.value.includes(',')) {
        updateInput(',');
    }
});

// Adicionando event listeners aos botões numéricos
zero.addEventListener('click', () => updateInput('0'));
um.addEventListener('click', () => updateInput('1'));
dois.addEventListener('click', () => updateInput('2'));
tres.addEventListener('click', () => updateInput('3'));
quatro.addEventListener('click', () => updateInput('4'));
cinco.addEventListener('click', () => updateInput('5'));
seis.addEventListener('click', () => updateInput('6'));
sete.addEventListener('click', () => updateInput('7'));
oito.addEventListener('click', () => updateInput('8'));
nove.addEventListener('click', () => updateInput('9'));

// Adicionando event listeners para operadores
som.addEventListener('click', () => {
    num1 = parseFloat(input.value.replace(',', '.'));
    operator = '+';
    updateInput(' + ');
});
sub.addEventListener('click', () => {
    num1 = parseFloat(input.value.replace(',', '.'));
    operator = '-';
    updateInput(' - ');
});
mul.addEventListener('click', () => {
    num1 = parseFloat(input.value.replace(',', '.'));
    operator = '*';
    updateInput(' x ');
});
div.addEventListener('click', () => {
    num1 = parseFloat(input.value.replace(',', '.'));
    operator = '/';
    updateInput(' / ');
});
per.addEventListener('click', () => {
    num1 = parseFloat(input.value.replace(',', '.'));
    operator = '%';
    updateInput(' % ');
});
rad.addEventListener('click', () => {
    num1 = parseFloat(input.value.replace(',', '.'));
    operator = '√';
    try {
        if (num1 < 0) {
            throw new Error('Número negativo não pode ter raiz quadrada real.');
        }
        input.value = Math.sqrt(num1).toString().replace('.', ',');
        num1 = '';
        operator = '';
        errorMessage.textContent = ''; // Limpa a mensagem de erro
    } catch (error) {
        showError(error.message);
    }
});

// Implementando a lógica de igual
igu.addEventListener('click', () => {
    try {
        num2 = parseFloat(input.value.substr(input.value.lastIndexOf(operator) + 1).replace(',', '.'));

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Operação inválida. Verifique os números e operador.');
        }

        let result = 0;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    throw new Error('Não é possível dividir por zero.');
                }
                result = num1 / num2;
                break;
            case '%':
                result = num1 * (num2 / 100); 
                break;
        }
        input.value = result.toString().replace('.', ',');
        num1 = result;
        num2 = '';
        operator = '';
        errorMessage.textContent = ''; // Limpa a mensagem de erro
    } catch (error) {
        showError(error.message);
    }
} 
);

// Event listener para o botão AC (limpar)
res.addEventListener('click', clearInput);
