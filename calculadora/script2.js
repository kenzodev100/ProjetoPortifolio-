var tela = document.getElementById("display");
var aux = "";



// Adiciona números, operadores ou ponto à tela
function pressed(value){
    aux = aux + value;
    tela.innerHTML = aux;
}

// Limpa totalmente o display (Botão C / Tecla Esc)
function clearAll(){
    aux = "";
    tela.innerHTML = "0";
}

// Apaga o último caractere digitado (Botão < / Tecla Backspace)
function backspace(){
    aux = aux.slice(0, -1);
    tela.innerHTML = aux === "" ? "0" : aux;
}

// Executa o cálculo matemático com tratamento de erro básico
function calculate(){
    if (aux !== "") {
        try {
            aux = eval(aux).toString();
            tela.innerHTML = aux;
        } catch (e) {
            tela.innerHTML = "Erro";
            aux = "";
        }
    }
}

// Captura as teclas digitadas no teclado físico
document.addEventListener('keydown', (evento) => {
    let tecla = evento.key;
    
    // Mapeia a tecla Enter para o comportamento do igual (=)
    if (tecla === 'Enter') {
        tecla = '=';
    }

    // Verifica se é um número, operador válido ou ponto decimal
    if (!isNaN(tecla) || ['+', '-', '*', '/', '.'].includes(tecla)) {
        pressed(tecla);
    }
    
    // Executa o cálculo ao pressionar igual
    if (tecla === '=') {
        evento.preventDefault();
        calculate();
    }
    
    // Apaga o último caractere com Backspace
    if (tecla === 'Backspace') {
        backspace();
    }

    // Limpa tudo com a tecla Escape (Esc)
    if (tecla === 'Escape') {
        clearAll();
    }
    
});

var botoes = document.getElementsByTagName("button");

for (let i = 0; i < botoes.length; i++) {

    botoes[i].addEventListener('mousedown', function() {
        botoes[i].style.backgroundImage = 'linear-gradient(gray, red)';
    });

    function voltarPadrao() {
        botoes[i].style.backgroundImage = '';
    }

    botoes[i].addEventListener('mouseup', voltarPadrao);
    botoes[i].addEventListener('mouseleave', voltarPadrao);
}

