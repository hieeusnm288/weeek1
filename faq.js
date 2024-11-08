document.querySelectorAll(".ques").forEach((question, index) => {
  question.addEventListener("click", () => displayAnswer(index + 1));
});
document.addEventListener("DOMContentLoaded", () => {
  displayAnswer(1); // This will run only once when the page loads
});
function displayAnswer(selectedIndex) {
  document.querySelectorAll(".answer").forEach((answer, index) => {
    const question = document.getElementById(`ques-${index + 1}`);
    const openIcon = document.getElementById(`open-${index + 1}`);
    const closeIcon = document.getElementById(`close-${index + 1}`);

    if (index + 1 === selectedIndex) {
      answer.style.display = answer.style.display === "none" ? "" : "none";
      question.style.backgroundColor =
        answer.style.display === "none" ? "" : "#407bfc";
      question.style.color = answer.style.display === "none" ? "" : "#fff";
      openIcon.style.display = answer.style.display === "none" ? "" : "none";
      closeIcon.style.display = answer.style.display === "none" ? "none" : "";
      answer.classList.add("open");
    } else {
      answer.style.display = "none";
      question.style.backgroundColor = "";
      question.style.color = "";
      openIcon.style.display = "";
      closeIcon.style.display = "none";
    }
  });
}
