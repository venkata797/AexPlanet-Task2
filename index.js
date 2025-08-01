// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    feedback.textContent = "All fields are required!";
    feedback.style.color = "red";
  } else if (!emailRegex.test(email)) {
    feedback.textContent = "Please enter a valid email!";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
    this.reset();
  }
});

// To-do list
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function () {
      li.remove();
    };

    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
}
