const inputValidator = document.querySelector('#validation-input');
inputValidator.addEventListener(`blur`, () => { 
    const dataLength = Number(inputValidator.dataset.length);
    const inputLength = inputValidator.value.length;

  if (inputLength === dataLength) {
    inputValidator.classList.remove('invalid');
    inputValidator.classList.add('valid');
  } else {
    inputValidator.classList.remove('valid');
    inputValidator.classList.add('invalid');
  }
})