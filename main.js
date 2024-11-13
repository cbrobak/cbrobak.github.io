const affirmationContainer = document.getElementById("affirmationContainer");
const affirmation = document.getElementById("affirmation");

affirmation.innerText = " "
  ? (affirmationContainer.style.display = "none")
  : (affirmationContainer.style.display = "inline-block");
// ? (affirmationContainer.style.display = "none")
// : (affirmationContainer.style.display = "block");

function getAffirmations() {
  const url =
    "https://api.allorigins.win/get?url=" +
    encodeURIComponent("https://www.affirmations.dev") +
    "&_=" +
    new Date().getTime();

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const affirmationText = JSON.parse(data.contents).affirmation;
      affirmation.textContent = affirmationText; // Update the affirmation text
    })
    .catch((error) => {
      console.error("Error fetching affirmation:", error);
    });
}
