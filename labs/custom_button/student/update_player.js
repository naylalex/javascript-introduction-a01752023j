/* LAB: Asigna a la variable 'para' una referencia al elemento p por medio de document.querySelector() */

/* LAB: Añade un event listener para el evento click asociado a la función updateName */

/* LAB: Implementa la función updateName() considerando:
Presentación de un diálogo por medio de la función prompt()
Asignación del contenido de texto del párrafo por medio del atributo textContent de la variable para
para.textContent = 'Some string'
*/
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new drummer');
  para.textContent = `Drummer 1: ${name}`;
}

