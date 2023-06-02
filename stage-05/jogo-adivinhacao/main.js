// Variaveis
const randomNumber = Math.round(Math.random() * 10);

let xAttemps = 1;

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector('#btnReset');

const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

// Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keypress', pressEnter);

// Funções
function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector('#inputNumber');

    if (Number(inputNumber.value) === randomNumber) {
        toggleScreen()

        document.querySelector('.screen2 h2').innerText = `Você acertou em ${xAttemps} tentativas`
    }

    inputNumber.value = '';

    xAttemps++;
}

function handleResetClick() {
    toggleScreen()

    xAttemps = 1

    location.reload();
}

function toggleScreen() {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}

function pressEnter(event) {
    if (event.key === 'Enter') {
        handleResetClick();
    }
}