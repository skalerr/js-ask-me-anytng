import { Question } from "./question"
import { isValid } from "./utils"
import { createModal } from "./createModal"

import "./style.css"

window.addEventListener("load", Question.renderList)
const form = document.getElementById("form")
const modalBtn = document.getElementById("modal-btn")
const input = form.querySelector("#question-input")
const submitBtn = form.querySelector("#submit")

form.addEventListener("submit", submitFormHandler)
modalBtn.addEventListener("click", openModal)

input.addEventListener("input", () => {
  submitBtn.disabled = !isValid(input.value)
})

function submitFormHandler(event) {
  event.preventDefault()
  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON(),
    }
    submitBtn.disabled = true
    // Async request to server to save question
    Question.create(question).then(() => {
      input.value = ""
      input.className = ""
      submitBtn.disabled = false
    })
    console.log("Question", question)
  }
}

// function openModal() {
//   createModal("auth", <h1>test</h1>)
// }
