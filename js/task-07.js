const fontSize = document.querySelector(`#font-size-control`);
fontSize.addEventListener(`input`, () => { 
text.style.fontSize = `${fontSize.value}px`;
})