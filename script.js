const cook1 =  document.querySelector(".luckCook1")
const cook2 = document.querySelector(".luckCook2")

const btnAgain = document.querySelector('#BtnAgain')
const cookImg = document.querySelector('#mysteriousCook')
const message = document.querySelector('.message')

let lastNumber = -1;

let messageText = [
    'Adote um cachorro!',
    'Viaje mais!',
    'Desafie-se!',
    'Algo bom acontecerá hoje.',
    'Cuidado com a positividade excessiva.',
    'Seu cabelo está lindo hoje.',
    'Se apaixone por alguém que te olhe como seu cachorro.',
    'Assista o pôr do sol.',
    'Não faz nada!',
    'vai jogar aquele jogo que você tá adiando.'
]


cookImg.addEventListener('click', handleTryCook)
btnAgain.addEventListener('click',  handleTryAgain)


function handleTryCook() {
    toggleCookies()
}

function handleTryAgain() {
   toggleCookies()
}

function toggleCookies() {
    cook1.classList.toggle("hide")
    cook2.classList.toggle("hide")

    if(!cook2.classList.contains("hide")){
        let randomNumber = Math.round(Math.random() * 9);

        if(randomNumber === lastNumber){
            while(randomNumber === lastNumber){
                randomNumber = Math.round(Math.random() * 9);
            }
        }

        message.textContent = messageText[randomNumber];
        lastNumber = randomNumber;
    }
}