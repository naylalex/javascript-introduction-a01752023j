const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new drummer');
  para.textContent = `Drummer 1: ${name}`;
}
