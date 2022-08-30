let primary = [];
// let mem = null;
let num1 = null;
let secondary = [];
let num2 = null;
let operation = 0;
let result = null;
let iteration = 0;

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
    // input2();
    document.getElementById('result').innerHTML = "+";
    if (result === null) {
        num1 = +primary.join("");
    };
    primary = [];
});
const subtraction = document.getElementById('minus').addEventListener('click', () => {
    operation = 2;
    // input2();
    document.getElementById('result').innerHTML = "-";
});
const multiplication = document.getElementById('multiply').addEventListener('click', () => {
    operation = 3;
    // input2();
    document.getElementById('result').innerHTML = "×";
});
const division = document.getElementById('divide').addEventListener('click', () => {
    operation = 4;
    // input2();
    document.getElementById('result').innerHTML = "÷";
});
const operate = document.getElementById('equals').addEventListener('click', () => {
    num2 = +primary.join("");
    result = calculate(num1, num2);
    console.log(calculate(num1, num2));
    document.getElementById('result').innerHTML = result;
    operation = 0;
    iteration ++;
    num1 = result
});

// const numbers = document.querySelectorAll('number')
// numbers.forEach((button) => 
// button.addEventListener('click', () => 
//     primary.push(button.textContent))
//     )

// function input1() {
    // if (iteration > 0) {
    //     return 
    // } else {
// if (operation === 0) {
    for (let i = 0; i < 10; i++) {
        document.getElementById(`button${i}`).addEventListener('click', () => {
            primary.push(i)
            
            document.getElementById('result').innerHTML = +primary.join("");
        })
    };
// };
// };
// } else {
// // function input2() {
//     for (let i = 0; i < 10; i++) {
//         document.getElementById(`button${i}`).addEventListener('click', () => {
//             secondary.push(i)
//             num2 = +secondary.join("");
//             document.getElementById('result').innerHTML = num2;
//         })
//     };
// // };
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









// let num1 = null;
// let primary = [];

// // const numbers = document.querySelectorAll('number')
// // numbers.forEach((button) => (console.log(button.id))
// // )
// // button.addEventListener('click', () => {
// //     primary.push(button.innerText);
// //     console.log(button.innerText);
// //     document.getElementById('result').innerHTML = primary;
// //     console.log(primary);
// //     })
// // })

//     //document.getElementById('result').innerHTML = primary;