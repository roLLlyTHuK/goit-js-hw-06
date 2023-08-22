const fontSize = document.querySelector(`#font-size-control`);
text.style.fontSize = `48px`;
fontSize.addEventListener(`input`, () => { 
text.style.fontSize = `${fontSize.value}px`;
})