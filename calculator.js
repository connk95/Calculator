let memory = [];
let num1 = null;
let num2 = null;
let operation = 0;
let result = null;
let num3 = null;

function calculate(a, b) {
    if (operation === 1) {
        return a + b
    } else if (operation === 2) {
        return a - b
    } else if (operation === 3) {
        return a * b 
    } else if (operation === 4) {
        return a / b
    };
};

const addition = document.getElementById('plus').addEventListener('click', () => {
    operation = 1;
    document.getElementById('result').innerHTML = "+";
    if (result === null) {
        num1 = +memory.join("");
    };
    memory = [];
});

const subtraction = document.getElementById('minus').addEventListener('click', () => {
    operation = 2;
    document.getElementById('result').innerHTML = "-";
    if (result === null) {
        num1 = +memory.join("");
    };
    memory = [];
});

const multiplication = document.getElementById('multiply').addEventListener('click', () => {
    operation = 3;
    document.getElementById('result').innerHTML = "×";
    if (result === null) {
        num1 = +memory.join("");
    };
    memory = [];
});

const division = document.getElementById('divide').addEventListener('click', () => {
    operation = 4;
    document.getElementById('result').innerHTML = "÷";
    if (result === null) {
        num1 = +memory.join("");
    };
    memory = [];
});

const decimal = document.getElementById('decimal').addEventListener('click', () => {
    memory.push('.');
    document.getElementById('result').innerHTML = +memory.join("") + ".";
});

const del = document.getElementById('delete').addEventListener('click', () => {
    memory.pop();
    document.getElementById('result').innerHTML = +memory.join("");
});

const negate = document.getElementById('negate').addEventListener('click', () => {
    document.getElementById('result').innerHTML = (+memory.join("")) * -1;
    let num3 = ((+memory.join("")) * -1);
    memory = [];
    memory.push(num3);
});

const operate = document.getElementById('equals').addEventListener('click', () => {
    num2 = +memory.join("");
    if (operation === 4 && num2 === 0) {
        document.getElementById('result').innerHTML = "Huh?"
    } else if (num1 === null || num2 === null || memory === [] || operation === 0) {
        document.getElementById('result').innerHTML = "Error"
    } else {
        if (num3 !== null) {
            result = Math.round(calculate(num1, num2) * 100) / 100
            document.getElementById('result').innerHTML = result
            operation = 0;
            num1 = result;
            num2 = null;
        } else {
            result = Math.round(calculate(num1, num2) * 100) / 100
            document.getElementById('result').innerHTML = result
            operation = 0;
            num1 = result;
            num2 = null;
        }
    };
});

for (let i = 0; i < 10; i++) {
    document.getElementById(`button${i}`).addEventListener('click', () => {
        memory.push(i)    
        document.getElementById('result').innerHTML = +memory.join("");
    })
};

const clear = document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('result').innerHTML = "";
    result = null;
    memory = [];
    num1 = null; 
    num2 = null;
    operation = 0;
});

