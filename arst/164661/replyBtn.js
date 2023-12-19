// 여기에 주석 입력
const btnReply = document.querySelector(".button--reply");
const reply = document.querySelector("div.reply");

var NofReplier = 0;

const btnContext = btnReply.innerHTML;

btnReply.innerHTML = btnContext + " " + NofReplier;

function handleButtonClick() {
  if (reply.style.display == "none") {
    reply.style.display = "block";
  } else {
    reply.style.display = "none";
  }
}

btnReply.addEventListener("click", handleButtonClick);
