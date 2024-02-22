// Selecting DOM elements
const nextBtn = document.querySelector("#nextButton");
const backBtn = document.querySelector("#backButton");
const catImg = document.querySelector("#catImage");

// Get array of cat image URLs when page is loaded
document.addEventListener("DOMContentLoaded", (event) => {
  getCats();
});

// Stores URLs of cat images
let catArray = [];
// Stores current position in catArray
let catIndex = 49;

// Get cat images using an API call
async function getCats() {
  // Fetching data from the API
  let catArrayJson = fetch(
    "https://api.thecatapi.com/v1/images/search?limit=100&api_key=live_HebNQfjZDKa2d9FGWsTYTfDGjM694XU6ysDZVhKuY8CdUeBZZpmKNTgjRW6Jpd2e"
  )
    // Parsing the response as JSON
    .then((response) => {
      return response.json();
    })
    // Processing the JSON data
    .then((allimages) => {
      // Looping through the array of images
      for (let i = 0; i < allimages.length; i++) {
        // Pushing each image URL to the catArray
        catArray.push(allimages[i].url);
      }
      // Log that the API call has completed
      console.log("Cats have arrived!");
      // Enable next and back btns after fetching images
      nextBtn.disabled = false;
      backBtn.disabled = false;
    });
}

// Change the displayed cat image
const changeImg = () => {
  catImg.src = catArray[catIndex];
};

// Event listener for the next button
nextBtn.addEventListener("click", () => {
  adjustIndex(1);
  changeImg();
});

// Event listener for the back button
backBtn.addEventListener("click", () => {
  adjustIndex(-1);
  changeImg();
});

// Adjust the index based on direction (1 for next, -1 for back)
const adjustIndex = (direction) => {
  if (direction === -1) {
    // If going back and not at the beginning, decrement index, else set to the last image
    if (catIndex != 0) {
      catIndex--;
    } else {
      catIndex = 99;
    }
  } else {
    // If going forward and not at the end, increment index, else set to the first image
    if (catIndex != 99) {
      catIndex++;
    } else {
      catIndex = 0;
    }
  }
};
