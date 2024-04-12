const inputContent = document.getElementById("inputContent");
const outputContent = document.getElementById("outputContent");

inputContent.addEventListener("keyup", () => {
  // Cách 1: Hiển thị nội dung trực tiếp trong thẻ div
  outputContent.innerHTML = inputContent.value;

  // Cách 2: Sử dụng innerText
//   outputContent.innerText = inputContent.value;
});
