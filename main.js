const submitButton = document.querySelector(".button")
const rating = document.querySelectorAll(".number")
const ratingValue = document.querySelectorAll("label")
const ratingPage = document.querySelector(".active_inactive")
const errorMessage = document.getElementById("error_msg")

// Invoke customerRating fn when button clicked
submitButton.addEventListener("click", () => customerRating())

// Fn/Event-Listener for submit button + thank you page
function customerRating(customerRatingNumber) {
  if (customerRatingNumber == null) {
    errorMessage.innerHTML = "Please make a selection"
  } else {
    submitButton.addEventListener("click", function () {
      ratingPage.innerHTML = `<div class="center_thank_you">
      <div class="thank_you_container">
        <img src="images/illustration-thank-you.svg" alt="" />
        <div class="thank_you_msg_container">
          <p class="selection_msg">
            You selected ${customerRatingNumber}
            out of 5
          </p>
        </div>
    
        <p class="thank_you_msg">Thank you!</p>
    
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>`
    })
  }
}

// Loop through customer raitings
for (let ratingValues of ratingValue) {
  ratingValues.addEventListener("click", function () {
    let customerRatingNumber = ratingValues.innerHTML
    customerRating(customerRatingNumber)
  })
}
