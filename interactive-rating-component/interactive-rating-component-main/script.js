const rating = document.querySelectorAll(".rating")
const ratingsContainer = document.querySelector(".ratings-container")
const ratingMessage = document.querySelector(".rating-message")
const submitBtn = document.querySelector(".submit-btn")


function getRating(){
    ratingsContainer.addEventListener("click", (e)=> {
        const currentValue = e.target.value
        ratingMessage.innerText = `You selected ${currentValue} out of 5`
    })
}
getRating()


submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector(".container").style.display = "none"
    document.querySelector(".thanks-container").style.display = "flex"
  })

