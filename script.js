const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');


// biar pas submit ga reload website nya
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value.trim()) {
        addTodo(input.value.trim());
        input.value = '';
    }
});
// pas submit, kolom input ny dikosongkan lagi

//definisi to do list
function addTodo(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const btn = document.createElement('button');
    btn.textContent = '✕';
    btn.className = 'remove-btn';
    btn.onclick = () => li.remove();

    li.appendChild(btn);
    list.appendChild(li);
}
