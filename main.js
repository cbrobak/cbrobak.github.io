const affirmationContainer = document.getElementById("affirmationContainer");
const affirmation = document.getElementById("affirmation");
affirmationContainer.style.display = "none";

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
      if (affirmationText && affirmationText.trim() !== "") {
        affirmation.textContent = affirmationText; // Update the affirmation text
        affirmationContainer.style.display = "flex"; // Show the container
      } else {
        affirmationContainer.style.display = "none"; // Hide container if no valid text
      }
    })
    .catch((error) => {
      console.error("Error fetching affirmation:", error);
    });
  affirmation.innerHTML = "" ? affirmation.classList.add("visible") : null;
}
