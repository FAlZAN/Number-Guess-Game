let number = 10;
document.getElementById('number').innerHTML = number;

let leftArrow = document.getElementById('leftArrw');
leftArrow.addEventListener('click', () => {
    let manipulatedNum = number -= 1;
    let setNum = document.getElementById('number').innerHTML = manipulatedNum;
    localStorage.setItem('data', setNum);
});

let rightArrow = document.getElementById('rightArrw');
rightArrow.addEventListener('click', () => {
    let manipulatedNum = number += 1;
    let setNum = document.getElementById('number').innerHTML = manipulatedNum;
    localStorage.setItem('data', setNum);
});

let resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
    let reset = 10;
    localStorage.setItem('data', reset);
    let original = localStorage.getItem('data');
    document.getElementById('number').innerHTML = original;
});