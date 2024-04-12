const answerInput = document.getElementById("answerInput");
const checkButton = document.getElementById("checkButton");
const messageElement = document.getElementById("message");

checkButton.addEventListener("click", () => {
  const answer = answerInput.value;
  const maxLength = 10;

  if (answer.length > maxLength) {
    messageElement.textContent = "Câu trả lời không hợp lệ! Vượt quá " + maxLength + " ký tự.";
    messageElement.classList.add("error");
  } else {
    messageElement.textContent = "Câu trả lời hợp lệ!";
    messageElement.classList.add("success");
  }

  setTimeout(() => {
    messageElement.textContent = "";
    messageElement.classList.remove("success", "error");
  }, 3000);
});
