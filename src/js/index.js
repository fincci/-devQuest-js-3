const inputs = document.querySelectorAll('.input')
const send = document.querySelector('.btn')
const flags = document.querySelectorAll('.mandatory')

send.addEventListener('click', () => {
    inputs.forEach(input => {
        const place = input.id
        if (input.value != '') {
            input.classList.remove('flagged')
            input.classList.add('pass')
            flags[place].classList.add('hide')
        } else {
            input.classList.remove('pass')
            input.classList.add('flagged')
            flags[place].classList.remove('hide')
        }
    })
})

inputs.forEach(input => {
    input.addEventListener('input', () => {
        const place = input.id
        if (input.value != '') {
            input.classList.remove('flagged')
            input.classList.add('pass')
            flags[place].classList.add('hide')
        } else {
            input.classList.remove('pass')
            input.classList.add('flagged')
            flags[place].classList.remove('hide')
        }
    })
})