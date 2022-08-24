//store values selected by the user
let primary = [];
let mem = null;
let num1 = null;
let secondary = [];
let num2 = null;
let operation = 0;
let result = null;
let iteration = 0;

//functions for the four operations used by this calculator
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

// function init(operation) {
//     if (operation !== 0) {
//         return
//     } else {
//         input1();
//     };
// };

// init(0);

input1();

//buttons for operations
const addition = document.getElementById('plus').addEventListener('click', () => {
    operation = 1;
    num1 = mem;
    input2();
    // init(1);
    document.getElementById('result').innerHTML = "+";
});
const subtraction = document.getElementById('minus').addEventListener('click', () => {
    operation = 2;
    num1 = mem
    input2();
    // init(2);
    document.getElementById('result').innerHTML = "-";
});
const multiplication = document.getElementById('multiply').addEventListener('click', () => {
    operation = 3;
    num1 = mem
    input2();
    // init(3);
    document.getElementById('result').innerHTML = "×";
});
const division = document.getElementById('divide').addEventListener('click', () => {
    operation = 4;
    num1 = mem
    input2();
    // init(4);
    document.getElementById('result').innerHTML = "÷";
});
const operate = document.getElementById('equals').addEventListener('click', () => {
    //if (iteration > 0) {
    //    num1 = result;
    //} 
    calculate(num1, num2);
    console.log(calculate(num1, num2));
    document.getElementById('result').innerHTML = calculate(num1, num2);
    operation = 0;
    iteration ++;
});

//store the first and second integers using the selected numbers
//switch from variable num1 to num2 when an operation has been selected
function input1() {
    // if (iteration > 0) {
    //     return 
    // } else {
    for (let i = 0; i < 10; i++) {
        document.getElementById(`button${i}`).addEventListener('click', () => {
            primary.push(i)
            mem = +primary.join("");
            document.getElementById('result').innerHTML = mem;
        })
    };
};
// };

function input2() {
    // if (operation !== 0) {
    for (let i = 0; i < 10; i++) {
        document.getElementById(`button${i}`).addEventListener('click', () => {
            secondary.push(i)
            num2 = +secondary.join("");
            document.getElementById('result').innerHTML = num2;
        })
    };
};
// };

const clear = document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('result').innerHTML = "";
    result = null;
    primary = [];
    mem = null;
    num1 = null; 
    secondary = [];
    num2 = null;
    operation = 0;
    // iteration = 0;
});

// function init(operation) {
//     if (operation != 0) {
//         return
//     } else {
//         input1();
//     };
// };

// init(0);

//input1(operation);




