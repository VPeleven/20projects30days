let pass = document.querySelector('#password-input')
let bg = document.querySelector('.bg')

pass.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    const blurValue = 8 - length +1
    bg.style.filter = `blur(${blurValue}px)`
  })