let number1 = prompt('Enter first Number');
let operator = prompt('Enter operator (either /,*,-,+)');
let number2 = prompt('Enter second Number');

if (operator == '+') {
    alert(Number(number1) + Number(number2))
} else if (operator == '-') {
    alert(Number(number1) - Number(number2))
} else if (operator == '*') {
    alert(Number(number1) * Number(number2))
} else if (operator == '/') {
    alert(Number(number1) / Number(number2))
} else {
    alert('invalid operator')
}