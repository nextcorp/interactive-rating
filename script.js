const form = document.querySelector(".rating-form")
const rating = document.querySelector(".rating")
const state_rating = document.querySelector(".state-rating")
const thankyou = document.querySelector(".state-thank")
const value = document.querySelector(".rating-value")

let rating_number = 5

form.addEventListener("submit", (e) => {
    e.preventDefault()
    state_rating.classList.add("hide")
    value.innerText = rating_number
    thankyou.classList.remove("hide")
    thankyou.classList.add("state-thank-flex")
})

rating.addEventListener("change", (e) => {
    rating_number = e.target.value
})