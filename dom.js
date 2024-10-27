function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addButton = document.getElementById("addButton");

    if (taskInput.value !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = "";

        addButton.style.backgroundColor = "darkblue"; 

        setTimeout(() => {
            addButton.style.backgroundColor = ""; 
        }, 200); 
    } else {
        addButton.style.backgroundColor = ""; 
    }
}

function changeFontSize(size) {
    document.body.style.fontSize = size + "px";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function changeFontStyle() {
    const currentFont = document.body.style.fontFamily;
    document.body.style.fontFamily = currentFont === "Arial, sans-serif" ? "Courier New, monospace" : "Arial, sans-serif";
}

function changeBackgroundColor() {
    const color = prompt("Enter a background color (e.g., 'lightblue', '#ffcc00'):");
    if (color) {
        document.body.style.backgroundColor = color;
    }
}
