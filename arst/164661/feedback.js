const btnFeedback = document.querySelector(".button--feedback");
const modal = document.querySelector(".modal-feedback");
const modalWrapper = document.querySelector(".modal-feedback--wrapper");
const btnFeedbackClose = document.querySelector(
  ".modal-feedback--footer>.button-close"
);

function modalwiewer() {
  modal.style.display = "flex";
}

function modalclose() {
  modal.style.display = "none";
}

function transitionModalOn() {
  modal.classList.add("transition--modal");
}
function transitionModalOff() {
  modal.classList.remove("transition--modal");
}

btnFeedback.addEventListener("click", transitionModalOn);
btnFeedback.addEventListener("click", modalwiewer);
btnFeedbackClose.addEventListener("click", modalclose);
btnFeedbackClose.addEventListener("click", transitionModalOff);
