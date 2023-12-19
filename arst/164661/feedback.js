const btn = document.querySelector(".button--feedback");
const modal = document.querySelector(".modal-feedback");

function modalwiewer() {
  modal.style.display = "flex";
}

btn.addEventListener("click", modalwiewer);
