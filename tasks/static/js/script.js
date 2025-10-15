// Task Management JavaScript

document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] TaskMe initialized")

  // Handle status radio changes
  const statusRadios = document.querySelectorAll('input[name="status"]')
  statusRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      console.log("[v0] Status changed to:", this.value)
    })
  })

  // Form validation
  const taskForm = document.querySelector(".task-form")
  if (taskForm) {
    taskForm.addEventListener("submit", (e) => {
      const titleInput = document.getElementById("title")
      if (titleInput && titleInput.value.trim() === "") {
        e.preventDefault()
        alert("Por favor, insira um título para a tarefa.")
        titleInput.focus()
        return false
      }
      console.log("[v0] Form submitted")
    })
  }

  // Add smooth transitions
  const taskLinks = document.querySelectorAll(".task-link")
  taskLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      console.log("[v0] Task clicked:", this.querySelector(".task-name").textContent)
    })
  })
})

// Helper function to update task status
function updateTaskStatus(taskId, newStatus) {
  console.log("[v0] Updating task", taskId, "to status:", newStatus)
  // Django will handle this via form submission or AJAX
}

// Helper function to delete task
function deleteTask(taskId) {
  if (confirm("Tem certeza que deseja excluir esta tarefa?")) {
    console.log("[v0] Deleting task:", taskId)
    // Django will handle this via POST request
    window.location.href = `/task/${taskId}/delete`
  }
}
