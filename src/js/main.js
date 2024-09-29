const input = document.getElementById('input');
const addBtn = document.querySelector('.btn__add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const text = input.value;

    if(text !== '') {
        const li = document.createElement('li')
    const p = document.createElement('p')
    p.textContent = text //aqui ya se agrega el contenido que tiene el texto

    li.appendChild(p)
    li.appendChild(addDeleteBtn())//se va a agregar el boton.
    ul.appendChild(li)

    input.value = '';

    empty.style.display = 'none';
    }
})

function addDeleteBtn() {
    const deleteBtn = document.createElement('button')

    deleteBtn.textContent = 'X';
    deleteBtn.className = 'btn__delete'

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;//nos referimos la boton para poder eliminar al elemento de arriba(padre), no al boton.
        ul.removeChild(item);

        const items = document.querySelectorAll('li');

        if(items.length === 0) {
            empty.style.display = 'block' //para que se vuelva a ver el mensaje
        }
    })
    return deleteBtn;
}