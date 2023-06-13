let string = "";
let buttons = document.querySelectorAll('.btn ');
let buttons1 = document.querySelectorAll('.btn1 ');
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
Array.from(buttons1).forEach((btn1) => {
    btn1.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})