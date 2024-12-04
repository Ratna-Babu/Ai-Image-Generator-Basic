const API_KEY = "{YOUR API KEY}";
const submitIcon = document.querySelector("#submit-icon");
const inputElement = document.querySelector("input");
const imageSection = document.querySelector('.images-section');

const textarea = document.getElementById('textbox');
const input = document.getElementById('input');
textarea.addEventListener('input', function() {
    input.value = textarea.value;
});

var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
var textbox = $("#textbox");
var content = '';

recognition.continuous = true;

recognition.onresult = function(event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    content += transcript;
    textbox.val(content);
}

$("#start-btn").click(function(event){
    if (content.length){
        content += '';
    }
    recognition.start();
});

const showLoadingIndicator = () => {
    // Create spinner elements
    const spinnerContainer = document.createElement('div');
    spinnerContainer.classList.add('dot-spinner');

    for (let i = 0; i < 8; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot-spinner__dot');
        spinnerContainer.appendChild(dot);
    }

    // Append spinner to the image section
    imageSection.appendChild(spinnerContainer);
};

const hideLoadingIndicator = () => {
    const spinner = document.querySelector('.dot-spinner');
    if (spinner) {
        spinner.remove();
    }
};

const getImages = async() => {
    if (!inputElement.value.trim()) {
        alert("Please provide input");
        return;
    }
    showLoadingIndicator(); // Show loading indicator when images are being fetched
    const options = {
        method: "POST",
        headers: {
            "Authorization":`Bearer ${API_KEY}`,
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            prompt: inputElement.value,
            n: 2,
            size: "512x512"
        })
    };
    try {
        const response = await fetch("https://api.openai.com/v1/images/generations", options);
        const data = await response.json();
        console.log(data);

        data?.data.forEach(imageObject => {
            const imageContainer = document.createElement("div");
            imageContainer.classList.add('image-container');
            const imageElement = document.createElement("img");
            imageElement.setAttribute("src", imageObject.url);
            imageContainer.append(imageElement);
            imageSection.append(imageContainer);
        });
    } catch(error) {
        console.error(error);
    } finally {
        hideLoadingIndicator(); // Hide loading indicator when images are fetched or there's an error
    }
};

submitIcon.addEventListener('click', getImages);
