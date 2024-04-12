
const heading = document.createElement('h1');
heading.classList.add('heading-calc');
heading.textContent = 'CALCULATOR';

const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');

const displayRow = document.createElement('div');
displayRow.classList.add('rows');

const displayInput = document.createElement('input');
displayInput.type = 'text';
displayInput.id = 'display';

const buttonRows = [];

const buttonData = [
    ['AC','%', '/','('],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=',')']
];


for (const rowData of buttonData) {
    const buttonRow = document.createElement('div');
    buttonRow.classList.add('rows');

    for (const buttonText of rowData) {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = buttonText;
        buttonRow.appendChild(button);
    }

    buttonRows.push(buttonRow);
}


document.body.appendChild(heading);
document.body.appendChild(mainContainer);
mainContainer.appendChild(displayRow);
displayRow.appendChild(displayInput);

for (const buttonRow of buttonRows) {
    mainContainer.appendChild(buttonRow);
}

// Calculator functionality
let text = document.querySelector("input");
let buttons = document.querySelectorAll(".btn");
let string = "";
let op = ["/","*","-","+","%",".","1","2","3","4","5","6","7","8","9","0"]

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            text.value = string;
        } else if (e.target.innerHTML == "AC") {
            string = "";
            text.value = string;
        } else {
            string = string + e.target.innerHTML;
            text.value = string;
        }
    })
})

document.addEventListener("keydown", (e) => {
    const key = e.key
    if (op.includes(key)) {
        string += key
    } else if (key === "=" || key === "Enter") {
        string = eval(string);
    } else if (key === "Escape") {
        string = ""
    }
    text.value = string
})