let inp = document.getElementById('input');
buttons = document.querySelectorAll('button');
let inputValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            inputValue += buttonText;
            inp.value = inputValue;
        } else if (buttonText == 'C') {
            inputValue = "";
            inp.value = inputValue;
        } else if (buttonText == '=') {
            inp.value = eval(inputValue);
        } else {
            inputValue += buttonText;
            inp.value = inputValue;
        }

    })
}