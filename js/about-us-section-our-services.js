document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("toggle-button");
  const verticalLine = document.getElementById("vertical-line");

  button.addEventListener("click", function () {
    verticalLine.classList.toggle("rotate-90");
  });
});
