function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorChangerBtn = document.querySelector('.change-color');
const colorHexCode = document.querySelector('.color');
const body = document.body;

colorChangerBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorHexCode.textContent = randomColor;
});