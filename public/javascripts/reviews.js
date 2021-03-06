// Getting reviews for a certain parking space
function requestReviews() {
    var parking_id = String(window.location).split('#')[2];

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let reviews = JSON.parse(xhttp.responseText);
        createReviewElement(reviews);
      }
    };

    xhttp.open('POST', 'getReviewByParkingID.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({"parking_id": parking_id}));
}

// Creating an element to house a review
function createReviewElement(reviews) {
    if(reviews.length==0) {
        var nothing = document.createElement("P");
        nothing.innerText = "No Reviews";
        nothing.classList.add("noreviews");
        document.getElementById("reviewsBody").appendChild(nothing);
        return;
    }

    for(var i=0; i<reviews.length; i++) {

        var starString = "";
        for(var j=0; j<reviews[i].stars; j++) {
            starString += "&#10029;";
        }
        for(var j=reviews[i].stars; j<5; j++) {
            starString += "&#10025;";
        }

        var reviewBody = document.createElement("DIV");
        reviewBody.classList.add("reviewDivElement");
        var nameElement = document.createElement("P");
        nameElement.innerText = reviews[i].name;
        nameElement.classList.add("reviewReviewElement");
        reviewBody.appendChild(nameElement);
        var starElement = document.createElement("P");
        starElement.innerHTML = starString;
        starElement.classList.add("reviewReviewStars");
        reviewBody.appendChild(starElement);
        var textElement = document.createElement("P");
        textElement.innerText = reviews[i].review;
        textElement.classList.add("reviewReviewElement");
        reviewBody.appendChild(textElement);
        document.getElementById("reviewsBody").appendChild(reviewBody);
        if(i!=reviews.length-1) {
            var line = document.createElement("hr");
            line.classList.add("reviewHr");
            document.getElementById("reviewsBody").appendChild(line);
        }

    }
}

function backButton() {
    window.location.href = 'map.html' + '#' + String(window.location).split('#')[1];
}
