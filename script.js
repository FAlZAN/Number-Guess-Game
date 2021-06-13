const numbers = [];

let message = document.getElementById('message');
let dataNum = localStorage.getItem('data');
let compareNum = Math.floor(Math.random() * dataNum).toString();
console.log(compareNum);

let numKeyOne = document.getElementById('numKey-1');
numKeyOne.addEventListener('click', () => {
    numbers.push('1');
    document.getElementById('guessNum').innerHTML = numbers.join('');
});

let numKeyTwo = document.getElementById('numKey-2');
numKeyTwo.addEventListener('click', () => {
    numbers.push('2');
    document.getElementById('guessNum').innerHTML = numbers.join('');
});

let numKeyThree = document.getElementById('numKey-3');
numKeyThree.addEventListener('click', () => {
    numbers.push('3');
    document.getElementById('guessNum').innerHTML = numbers.join('');
});

let numKeyFour = document.getElementById('numKey-4');
numKeyFour.addEventListener('click', () => {
    numbers.push('4');
    document.getElementById('guessNum').innerHTML = numbers.join('');
});

let numKeyFive = document.getElementById('numKey-5');
numKeyFive.addEventListener('click', () => {
    numbers.push('5');
    document.getElementById('guessNum').innerHTML = numbers.join('');
});

let numKeySix = document.getElementById('numKey-6');
numKeySix.addEventListener('click', () => {
    numbers.push('6');
    document.getElementById('guessNum').innerHTML = numbers.join('');
});

let numKeySeven = document.getElementById('numKey-7');
numKeySeven.addEventListener('click', () => {
    numbers.push('7');
    document.getElementById('guessNum').innerHTML = numbers.join('');
});

let numKeyEight = document.getElementById('numKey-8');
numKeyEight.addEventListener('click', () => {
    numbers.push('8');
    document.getElementById('guessNum').innerHTML = numbers.join('');
});

let numKeyNine = document.getElementById('numKey-9');
numKeyNine.addEventListener('click', () => {
    numbers.push('9');
    document.getElementById('guessNum').innerHTML = numbers.join('');
});

let numKeyZero = document.getElementById('numKey-0');
numKeyZero.addEventListener('click', () => {
    numbers.push('0');
    document.getElementById('guessNum').innerHTML = numbers.join('');
});

let checkBtn = document.getElementById('checkBtn');
checkBtn.addEventListener('click', () => {
    let result = numbers;

    if(numbers.length == 1) {
        result = numbers[0];
    } else if (numbers.length == 2) {
        result = numbers[0] + numbers[1];
    }

    if(result == compareNum) {
        message.innerHTML = "Woah! DUDE you did found it.";
    } else if(result < compareNum) {
        message.innerHTML = "You are close just guess a bit higher";
    } else if(result > compareNum) {
        message.innerHTML = "You are around get your guess a little down";
    }
});

let resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
    numbers.length = 0;
    document.getElementById('guessNum').innerHTML = '';
    message.innerHTML = " ";
});