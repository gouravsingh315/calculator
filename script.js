let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = ''; 

buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML === 'DEL') {
            
            if (string.length > 0 && !isNaN(parseFloat(string[string.length - 1]))) {
                string = string.substring(0, string.length - 1);
            }
            display.value = string;
        } else if (e.target.innerHTML === 'AC') {
            string = '';
            display.value = string;
        } else if (e.target.innerHTML === '=') {
            try {
                string = eval(string);
                display.value = string;
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            string += e.target.textContent;
            display.value += e.target.textContent;
            console.log(e.target.textContent);
        }
    });
});
