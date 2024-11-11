function getAffirmations() {
  const url =
    "https://api.allorigins.win/get?url=" +
    encodeURIComponent("https://www.affirmations.dev") +
    "&_=" +
    new Date().getTime(); // Added a timestamp to URL to fetch a new affirmation with each call
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const affirmation = JSON.parse(data.contents).affirmation;
      document.getElementById("affirmation").innerText = affirmation;
    })
    .catch((error) => {
      console.error("Error fetching affirmation:", error);
      document.getElementById("affirmation").innerText =
        "Oops! Something went wrong.";
    });
}
