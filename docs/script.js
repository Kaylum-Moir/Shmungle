var dropdowns = document.getElementsByClassName("dropdownButton");
var i;
for (i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// Add this to your existing script.js file

var summonButton = document.getElementById("summonButton");
var summonPopup = document.getElementById("summonPopup");
var close = document.getElementsByClassName("close")[0];

summonButton.onclick = function() {
    summonPopup.style.display = "flex";
}

close.onclick = function() {
    summonPopup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == summonPopup) {
        summonPopup.style.display = "none";
    }
}

