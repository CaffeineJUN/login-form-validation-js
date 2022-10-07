const form = document.querySelector('form')
const eFidle = form.querySelector('.email')
const eInput = eFidle.querySelector('input')

const pFidle = form.querySelector('.password')
const pInput = pFidle.querySelector('input')

form.onsubmit = e => {
    e.preventDefault()

    if (eInput.value == '') eFidle.classList.add('shake', 'error')
    else checkEmail()

    if (pInput.value == '') {
        pFidle.classList.add('shake', 'error')
    }

    setTimeout(() => {
        eFidle.classList.remove('shake')
        pFidle.classList.remove('shake')
    }, 500)

    eInput.onkeyup = () => {
        checkEmail()
    }

    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        if (!eInput.value.match(pattern)) {
            eFidle.classList.add('error')
            let errorTxt = eFidle.querySelector('.error-txt')
            eInput.value != '' ? (errorTxt.innerText = 'Enter a valid email address') : (errorTxt.innerText = `Email can't be blank`)
        } else {
            eFidle.classList.remove('error')
        }
    }

    pInput.onkeyup = () => {
        // validate email pattern
        if (pInput.value == '') {
            pFidle.classList.add('error')
        } else {
            pFidle.classList.remove('error')
        }
    }

    if (!eFidle.classList.contains('error') && !pFidle.classList.contains('error')) {
        window.location.href = '#'
        console.log('form submited')
    }
}
