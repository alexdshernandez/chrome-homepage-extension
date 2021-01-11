var modal = document.getElementById("settings");
var settingsbtn = document.getElementById("settings-button");
var spans = document.getElementsByTagName("span");

// settingsbtn.onclick = function() {
//     modal.style.display = "block";
// }

// span.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// TODOLIST STUFF

// selectors
const todoInput = document.querySelector('.todo-input');
var ul = document.querySelector("ul");

// var tasksList = new Array();
// chrome.storage.local.get('tasklist', function(val) {
//     if (val.tasklist.length > 0) {
//         tasksList = val.list1;
//     }
//     for (var i = 0; i < tasksList.length; i++) {
//         addTodo(tasksList[i]);
//     }
// })

function deleteTodo() {
    for (let span of spans) {
        span.addEventListener("click", function (){
            span.parentElement.remove();
            event.stopPropagation();
        })
    }
}

function loadTodo() {
    if (localStorage.getItem('todoList')) {
        ul.innerHTML = localStorage.getItem('todoList');
        deleteTodo();
    }
}

todoInput.addEventListener("keypress", function(keyPressed){
    if (keyPressed.which === 13) {
        var li = document.createElement("li");
        var spanElement = document.createElement("span");
        var icon = document.createElement("i");

        var newTodo = todoInput.value;
        todoInput.value = "";

        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodo);
        deleteTodo();
        localStorage.setItem('todoList', ul.innerHTML);
    }
});

ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);



deleteTodo();

loadTodo();


// function addTodo(event) {
//     event.preventDefault();
//     // todo DIV
//     const todoDiv = document.createElement('div');
//     todoDiv.classList.add('todo');
//     // todo LI
//     const newTodo = document.createElement('li');
//     newTodo.innerText = todoInput.value;
//     newTodo.classList.add('todo-item');
//     todoDiv.appendChild(newTodo);
//     if (todoInput.value === "") {
//         return null;
//     }

//     // check mark button
//     const completedButton = document.createElement('button');
//     completedButton.innerHTML = '<i class"fas fa-check"></i>';
//     completedButton.classList.add('complete_btn');
//     todoDiv.appendChild(completedButton);

//     // append to list
//     todoList.appendChild(todoDiv);
//     // clear todo input value
//     todoInput.value = '';
//     chrome.storage.local.set({
//         'tasklist': tasksList
//     })
// }

// function deleteCheck(e) {
//     const item = e.target;
//     // delete item
//     if (item.classList[0] === "complete_btn") {
//         const todo = item.parentElement;
//         todo.classList.add("fall")
//         todo.addEventListener('transitionend', function () {
//             todo.remove();
//         })
//     }
// }


