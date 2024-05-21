window.onload = function() {
    document.getElementById("profile-pin-box").addEventListener("keypress", handleKeyPress);
};

function handleKeyPress(event) {
    if (event.key === "Enter") {
        checkInput();
    }
}

function checkInput() {
    const input = document.getElementById('profile-pin-box').value;
    const myDiv = document.getElementById('myDiv');
    if (input.toLowerCase() === 'show') {
        if (myDiv) {
            myDiv.style.display = 'block';
        } else {
            console.error("Element with ID 'myDiv' not found.");
        }
    } else {
        window.location.href = "home.html";
    }
}
