const input = document.getElementById("task-input")
// const taskContainer = document.getElementById("task")
const taskBox = document.getElementById("task-box")
function applyTask(){
    if (input.value === "") {
        alert("You must enter task")
    }
    else{
    let li = document.createElement("li");
    li.innerHTML = input.value;
    taskBox.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "Delete"
    li.appendChild(span)
    }
    input.value = ""
    saveTask()
};

taskBox.addEventListener("click",function(e){
    if (e.target.tagName === "LI") {
        // e.preventDefault()
        e.target.classList.toggle('checked');
        saveTask()
    } 
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask()
    }
    console.log(e);
    
});

function saveTask() {
    localStorage.setItem("pascal", taskBox.innerHTML);
    taskBox.innerHTML = localStorage.getItem("pascal")
}
function showSavedTAsk() {
    taskBox.innerHTML = localStorage.getItem("pascal")
}
showSavedTAsk()