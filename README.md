# Cat Image Generator

---

## Description

This is a simple web application that generates random cat images fetched from `TheCatAPI` (`https://thecatapi.com`). Users can navigate through a collection of cat images by clicking on the `Next` and `Back` buttons.

## Files

- **index.html**: HTML file for the user interface.
- **app.js**: JavaScript file containing logic for fetching cat images and handling button clicks.
- **styles.css**: CSS file for styling the web page.
- **Dockerfile**: Dockerfile for building a Docker image of the application.

## Instructions

### Building Docker Image

1. Clone the repository or download the files to your local machine.
2. Make sure Docker is installed on your system.
3. Navigate to the directory containing the Dockerfile and other files.

`cd /path/to/your/directory`

4. Build the Docker image using the following command:

`docker build -t cat-image-generator .`

### Running the Docker Container

5. Once the Docker image is built successfully, you can run the Docker container:

`docker run --name My-Container-Name -p 5000:5000 cat-image-generator`

6. Open your web browser and navigate to `http://localhost:5000` to access the Cat Image Generator application.

## Usage

- Click the `Next` button to view the next cat image.
- Click the `Back` button to view the previous cat image.
- Enjoy the random selection of adorable cat pictures!

## Note

- The application fetches cat images from `TheCatAPI`, so an active internet connection is required for image retrieval.
- The CSS for the page is far from perfect so depending on your browser size the elements may not display correctly.
