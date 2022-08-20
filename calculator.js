//store values selected by the user
let primary = [];
let num1 = null;
let secondary = [];
let num2 = null;
let operation = 0;
let result = null;

//functions for the four operations used by this calculator
function add(a, b) {
    result = a + b;
};
function subtract(a, b) {
    result = a - b;
};
function multiply(a, b) {
    result = a * b;
};
function divide(a, b) {
    result = a / b;
};

const addition = document.getElementById('plus').addEventListener('click', () => {
    operation = 1;
});
const subtraction = document.getElementById('minus').addEventListener('click', () => {
    operation = 2;
});
const multiplication = document.getElementById('multiply').addEventListener('click', () => {
    operation = 3;
});
const division = document.getElementById('divide').addEventListener('click', () => {
    operation = 4;
});
const operate = document.getElementById('equals').addEventListener('click', () => {
    if (operation === 1) {
        result = add(num1, num2);
    } else if (operation === 2) {
        result = subtract(num1, num2);
    } else if (operation === 3) {
        result = multiply(num1, num2);
    } else if (operation === 4) {
        result = divide(num1, num2);
    } else {
        alert("Please input a number!")
    };
    document.getElementById('result').innerHTML = result;
    operation = 0;
});

//store the first and second integers using the selected numbers
//switch from variable num1 to num2 when an operation has been selected
if (operation === 0) {
    for (let i = 0; i < 10; i++) {
        document.getElementById(`button${i}`).addEventListener('click', () => {
            primary.push(i)
            num1 = +primary.join("");
            document.getElementById('result').innerHTML = num1;
        })
    };
} else if (operation !== 0) {
    for (let i = 0; i < 10; i++) {
        document.getElementById(`button${i}`).addEventListener('click', () => {
            secondary.push(i)
            num2 = +secondary.join("");
            document.getElementById('result').innerHTML = num2;
        })
    };
};

//separate buttons for operations from number buttons

const clear = document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('result').innerHTML = "";
    result = [];
    primary = []; 
    secondary = [];
    operation = null;
});

