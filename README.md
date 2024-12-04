# AI Image Generator (Basic)

A web-based application that generates images using OpenAI's DALL-E API. The application features voice-to-text functionality and a modern user interface.

## Features

- Image generation using OpenAI's DALL-E API
- Voice-to-text input capability
- Real-time text input
- Loading animation while generating images
- Responsive design
- Navigation between Home, Generator, and Image Editor pages

## Technologies Used

- HTML5
- CSS3
- JavaScript
- jQuery
- Bootstrap 5.3.2
- OpenAI API
- Web Speech API

## Setup

1. Clone the repository

2. Navigate to the project directory


3. Add your OpenAI API key:
   - Open `app.js`
   - Replace `{YOUR API KEY}` with your actual OpenAI API key

4. Open `index.html` in a web browser or serve it using a local development server.

## Usage

1. **Text Input Method:**
   - Type your image description in the text input field
   - Click the arrow button (➢) to generate images

2. **Voice Input Method:**
   - Click the "Record" button to start voice recording
   - Speak your image description
   - The text will appear in the input field automatically
   - Click the arrow button to generate images

## Project Structure

ai-image-generator/
├── app.js # Main JavaScript file
├── index.html # Main HTML file
├── styles.css # Main styles
├── navstyle.css # Navigation styles
├── home.html # Home page
├── imgindex.html # Image editor page
└── [other asset files]
