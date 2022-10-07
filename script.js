const form = document.querySelector('form')
const eFidle = form.querySelector('.email')
const eInput = eFidle.querySelector('input')

const pFidle = form.querySelector('.password')
const pInput = pFidle.querySelector('input')

form.onsubmit = e => {
    e.preventDefault()

    if (eInput.value == '') {
        eFidle.classList.add('shake', 'error')
    }

    if (pInput.value == '') {
        pFidle.classList.add('shake', 'error')
    }

    setTimeout(() => {
        eFidle.classList.remove('shake')
        pFidle.classList.remove('shake')
    }, 500)
}
