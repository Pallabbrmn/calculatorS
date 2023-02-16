const userInputEl = document.getElementById('userInput');

let expression = '';

function press(num){

    expression += num;
    userInputEl.value = expression;
}

function equal(){
    userInputEl.value = eval(expression);
    expression = '';
}

function erase(){
    expression = '';
    userInputEl.value = expression;
}