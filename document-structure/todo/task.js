const taskAdd = document.getElementById("tasks__add");
const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");
const taskWrite = function (){
    let text = taskInput.value;
    return `<div class="task">
  <div class="task__title">
    ${text}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>`
}

taskAdd.addEventListener("click", (e)=> {
    e.preventDefault();
    if (taskInput.value !== "") {
        taskList.innerHTML += taskWrite();
        taskInput.value = "";
    }

})

taskList.addEventListener("click", (e)=> {
    let target = e.target;
    if (target.classList.contains("task__remove")) {
        e.preventDefault();
        e.target.closest(".task").remove();
    }
})