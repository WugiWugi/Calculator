const previous_operand = document.querySelector('#previous-operand')
const current_operand = document.querySelector('#current-operand')

const button = document.querySelectorAll('.calculator__button')
const AC = document.querySelector('#AC')
const DEL = document.querySelector('#DEL')
const division = document.querySelector('#division')
const multiplication = document.querySelector('#multiplication')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const point = document.querySelector('#point')
const equally = document.querySelector('#equally')

function addToString(value) {
    current_operand.textContent += value;
}

// Сами кнопки

document.querySelectorAll('.number').forEach(btn => {
    btn.addEventListener('click', () => addToString(btn.textContent))
  })


  point.addEventListener('click', () => {
    const content = current_operand.textContent
    if (!content.includes('.') && content !== '') {
      addToString(content === '' ? '0.' : '.')
    }
  })

// Сами кнопки


//Операции вычислений

function calculate(operand1, operand2, operator) {
    const ops = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b
    }
    return ops[operator]?.(operand1, operand2) ?? 'Ошибка'
  }



equally.addEventListener('click', () =>{
    let operator = previous_operand.textContent[previous_operand.textContent.length -1]
    let operand1 = Number(previous_operand.textContent.slice(0, -1))
    let operand2 = Number(current_operand.textContent)
    if (operator === '/' && operand2 === 0) {
        current_operand.textContent = 'Ошибка'
        previous_operand.textContent = '';
        return
      }
    current_operand.textContent = calculate(operand1, operand2, operator);
    previous_operand.textContent = '';
});

//Операции вычислений



// Кнопки для операций
plus.addEventListener('click', () => {
    let content = current_operand.textContent
    if(content !== ''){
    current_operand.textContent = '',
        previous_operand.textContent = `${content} +`
    }
},
);

minus.addEventListener('click', () => {
    let content = current_operand.textContent
    if(content !== ''){
    current_operand.textContent = '',
        previous_operand.textContent = `${content} -`
    }
},
);
multiplication.addEventListener('click', () => {
    let content = current_operand.textContent
    if(content !== ''){
    current_operand.textContent = '',
        previous_operand.textContent = `${content} *`
    }
},);

division.addEventListener('click', () => {
    let content = current_operand.textContent
if(content !== ''){
        current_operand.textContent = '',
        previous_operand.textContent = `${content} /`
}
},);
// Кнопки для операций


//Кнопки удаления
AC.addEventListener('click', () => {
    previous_operand.textContent = ''
    current_operand.textContent = '';  // Очищает строку полностью
});

DEL.addEventListener('click', () => {
    current_operand.textContent = current_operand.textContent.slice(0, -1);  // Удаляет последний символ
});
//Кнопки удаления


