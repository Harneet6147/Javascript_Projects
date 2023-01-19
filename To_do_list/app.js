// MODEL SECTION
let arr = [];
const savedTodos = JSON.parse(localStorage.getItem('arr'));

if (Array.isArray(savedTodos)) {
    arr = savedTodos;
}

function todo_title(x) {
    let element = document.createElement('title');
    element.innerText = x;
    document.body.append(element);
}

// FUNCTION TO CREATE A TO-DO-TASK
function create_task(textt, dueDate) {

    const num = '' + new Date().getTime();

    arr.push({
        title: textt,
        dueDate: dueDate,
        id: num,
        done_not: 0
    });

    save_Todos();
}

function remove_task(id) {


    arr = arr.filter(function (item) {
        if (item.id === id) {
            return false;
        }
        else {
            return true;
        }
    });
    save_Todos();

}

function done_task(id) {
    document.getElementById('to-do-list').innerHTML = '';

    arr.forEach(function (item_todo) {
        let element = document.createElement('tr');

        let new_task = document.createElement('td');
        new_task.innerText = item_todo.title;

        let new_date = document.createElement('td');
        new_date.innerText = item_todo.dueDate;

        let delete_button_column = document.createElement('td');

        let todo_list = document.getElementById('to-do-list');

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = delete_task;
        deleteButton.id = item_todo.id;

        delete_button_column.appendChild(deleteButton);

        let task_box_column = document.createElement('td');
        let task_box = document.createElement('button');

        if (item_todo.done_not === 1) {
            task_box.innerText = 'DONE';
            task_box.style.backgroundColor = 'green';

        }
        else if (id === item_todo.id && item_todo.done_not === 0) {
            task_box.innerText = 'DONE';
            task_box.style.backgroundColor = 'green';
            item_todo.done_not = 1;

        }
        else {
            task_box.innerText = 'PENDING';
            task_box.style.backgroundColor = 'red';

        }
        task_box.id = item_todo.id;
        task_box.onclick = check_the_task;
        task_box_column.appendChild(task_box);


        element.appendChild(new_task);
        element.appendChild(new_date);
        element.appendChild(delete_button_column);
        element.appendChild(task_box_column);


        todo_list.appendChild(element);
    })

    save_Todos();
}


//MODEL SECTION END

// VIEW SECTION 

function render() {
    document.getElementById('to-do-list').innerHTML = '';

    arr.forEach(function (item_todo) {
        let element = document.createElement('tr');

        let new_task = document.createElement('td');
        new_task.innerText = item_todo.title;

        let new_date = document.createElement('td');
        new_date.innerText = item_todo.dueDate;

        let delete_button_column = document.createElement('td');

        let todo_list = document.getElementById('to-do-list');

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = delete_task;
        deleteButton.id = item_todo.id;

        delete_button_column.appendChild(deleteButton);

        let task_box_column = document.createElement('td');
        let task_box = document.createElement('button');


        if (item_todo.done_not === 1) {
            task_box.innerText = 'DONE';
            task_box.style.backgroundColor = 'green';

        }
        else {
            task_box.innerText = 'PENDING';
            task_box.style.backgroundColor = 'red';

        }


        task_box.id = item_todo.id;
        task_box.onclick = check_the_task;
        task_box_column.appendChild(task_box);


        element.appendChild(new_task);
        element.appendChild(new_date);
        element.appendChild(delete_button_column);
        element.appendChild(task_box_column);


        todo_list.appendChild(element);
    })

}

function save_Todos() {
    localStorage.setItem('arr', JSON.stringify(arr));

}
//VIEW SECTION ENDS

//CONTROLLER SECTION

function add_task() {
    let textbox = document.getElementById('add-item');
    let date_picker = document.getElementById('add-date');

    const textt = textbox.value;
    const dueDate = date_picker.value;

    create_task(textt, dueDate);
    render();
}

function delete_task(event) {

    let deleteButton = event.target;
    let id_to_delete = deleteButton.id;
    remove_task(id_to_delete);
    render();

}

function check_the_task(event) {

    let done_button = event.target;
    let id_to_change = done_button.id;
    done_task(id_to_change);
}
//CONTROLLER SECTION ENDS

todo_title('To-Do-App');