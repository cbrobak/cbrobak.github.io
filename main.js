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
        affirmation.textContent = affirmationText;
        affirmationContainer.style.display = "flex";
      } else {
        showError("Error fetching affirmations, please try again later.");
      }
    })
    .catch((error) => {
      console.error("Error fetching affirmation:", error);
      showError("Unable to fetch an affirmation. Please try again later.");
    });
  affirmation.innerHTML = "" ? affirmation.classList.add("visible") : null;
}

function showError(message) {
  affirmationContainer.classList.remove("affirmationContainer");
  affirmationContainer.classList.add("error");
  affirmationContainer.textContent = message;
}
