// 여기에 주석 입력
const btn = document.querySelector("button");
const reply = document.querySelector("div.reply");

var NofReplier = 0;

const btnContext = btn.innerHTML;

btn.innerHTML = btnContext + " " + NofReplier;

function handleButtonClick() {
  if (reply.style.display == "none") {
    reply.style.display = "block";
  } else {
    reply.style.display = "none";
  }
}

btn.addEventListener("click", handleButtonClick);
