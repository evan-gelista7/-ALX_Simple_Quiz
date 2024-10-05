// Define the checkAnswer function
function checkAnswer() {
  // Correct answer is "4"
  const correctAnswer = "4";

  // Get the user's selected answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked');

  // Get the feedback element
  const feedback = document.getElementById("feedback");

  // Check if an answer is selected
  if (userAnswer) {
    // Compare the selected answer with the correct answer
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
    } else {
      feedback.textContent = "That's incorrect. Try again!";
    }
  } else {
    feedback.textContent = "Please select an answer before submitting!";
  }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
