const previous_operand = document.querySelector('#previous-operand')
const current_operand = document.querySelector('#current-operand')

const button = document.querySelectorAll('.calculator__button')
const AC = document.querySelector('#AC')
const DEL = document.querySelector('#DEL')
const division = document.querySelector('#division')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const multiplication = document.querySelector('#multiplication')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const plus = document.querySelector('#plus')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const minus = document.querySelector('#minus')
const point = document.querySelector('#AC')
const zero = document.querySelector('#zero')
const equally = document.querySelector('#equally')

function addToString(value) {
    current_operand.textContent += value;
}

// Привязка обработчиков событий
one.addEventListener('click', () => addToString('1'));
two.addEventListener('click', () => addToString('2'));
three.addEventListener('click', () => addToString('3'));
four.addEventListener('click', () => addToString('4'));
five.addEventListener('click', () => addToString('5'));
six.addEventListener('click', () => addToString('6'));
seven.addEventListener('click', () => addToString('7'));
eight.addEventListener('click', () => addToString('8'));
nine.addEventListener('click', () => addToString('9'));
zero.addEventListener('click', () => addToString('0'));

// Кнопки для операций
plus.addEventListener('click', () => {
    let content = current_operand.textContent 
    current_operand.textContent = '',
    previous_operand.textContent = `${content} +`},
);

minus.addEventListener('click', () => {
    let content = current_operand.textContent 
    current_operand.textContent = '',
    previous_operand.textContent = `${content} -`},
);
multiplication.addEventListener('click', () => {
    let content = current_operand.textContent 
    current_operand.textContent = '',
    previous_operand.textContent = `${content} *`},);

division.addEventListener('click', () => {
    let content = current_operand.textContent 
    current_operand.textContent = '',
    previous_operand.textContent = `${content} /`},);

point.addEventListener('click', () => {
    let content = current_operand.textContent 
    current_operand.textContent = '',
    previous_operand.textContent = `${content} -`},);


AC.addEventListener('click', () => {
    previous_operand.textContent = ''
    current_operand.textContent = '';  // Очистить строку
});

DEL.addEventListener('click', () => {
    current_operand.textContent = current_operand.textContent.slice(0, -1);  // Удалить последний символ
});