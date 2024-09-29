const input = document.getElementById('input');
const addBtn = document.querySelector('.btn__add');
const ul = document.querySelector('ul');

const empty = document.querySelector('.empty');

const dele = document.querySelector('.delete__all')
const deleteBtnAll = document.getElementById('eliminar-todo')

addBtn.addEventListener("click", (e) => {
    e.preventDefault(); //para que no se recargue la pag cada vez que se oprima 
    
    const text = input.value;

    if(text !== '') {
        const li = document.createElement('li')
    const p = document.createElement('p')
    p.textContent = text //aqui ya se agrega el contenido que tiene el texto

    li.appendChild(p)
    li.appendChild(addModiBtn())
    li.appendChild(addDeleteBtn())//se va a agregar el boton.
    ul.appendChild(li)

    input.value = '';

    empty.style.display = 'none';
    }

    dele.style.display = 'block' //al momento de oprimir pues que se muestre el contenido
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

        if(ul.children.length === 0) {
            dele.style.display = 'none' //para no mostrar la casilla de eliminar 
        }
    })
    return deleteBtn;
}

deleteBtnAll.addEventListener('click', (e) => {
    e.preventDefault();

    //* Eliminar todos los elementos 'li' de la lista
    while(ul.firstChild) {  //*mientras que ul tenga un primer hijo... entonces
        ul.removeChild(ul.firstChild)
    }//va eliminando al primer hijo y luego pasa al sig hijo hasta que no quede ningun hijo principal. como es un bucle pues es obvio que seguira hasta que no se cumpla dicha condicion

    if(ul.children.length === 0) {
        dele.style.display = 'none' //para no mostrar la casilla de eliminar 
    }

    const items = document.querySelectorAll('li');
    if(items.length === 0) {
        empty.style.display = 'block' //para que se vuelva a ver el mensaje
    }
})

function addModiBtn() {
    const modiBtn = document.createElement('button')

    modiBtn.textContent = '🛠️'
    modiBtn.className = 'btn__modifi'

    modiBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        
        const newText = prompt("Modifica tu tarea:"); //el prompt para cambiar el contenido
        if (newText !== null && newText.trim() !== '') {
            item.firstChild.textContent = newText; //actualizar li
        }
    })
    return modiBtn;

}