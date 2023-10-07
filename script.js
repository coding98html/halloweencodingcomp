// This function will be used to redirect the user when the paragraph is clicked
function redirectToUrl(url) {
    window.open(url, '_blank')
}

// Set the URL you want to redirect to
let redirectUrl = 'https://github.com/coding98html';

// Get the paragraph element (replace 'paragraph-id' with the actual id of your paragraph)
let paragraphElement = document.getElementById('w3-container');

// Add a click event listener to the paragraph
paragraphElement.addEventListener('click', function() {
    // Try to redirect to the URL
    try {
        redirectToUrl(redirectUrl);
    } catch (error) {
        // Log any errors that occur
        console.error('An error occurred:', error);
    }
});

// To change the image to make it look animated

window.onload = function() {
    var clicked = false;

    document.getElementById('skeleton-img').onclick = function() {
        var d = new Date();
        if (!clicked) {
            this.src = 'skeleton2.jpg?' + d.getTime();
            clicked = true;
        } else {
            this.src = 'skeleton.ico?' + d.getTime();
            clicked = false;
        }
    }
}

