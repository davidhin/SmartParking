function submitReview() {
    var textReview = document.getElementById("reviewTextArea").value;
    var stars = document.getElementsByClassName("star");

    var starCount = 0;
    for(var i=0; i<5; i++) {
        if(stars[i].innerHTML.charCodeAt()==10025) {
            starCount++;
        }
    }

    console.log(starCount);
    console.log(textReview);
}

function selectStar(starNum) {
    var stars = document.getElementsByClassName("star");

    for(var i=0; i<starNum; i++) {
        stars[i].innerHTML = "&#10025;";
    }

    for(var j=starNum; j<5; j++) {
        stars[j].innerHTML = "&#10029;";
    }
}

function backButton() {
    window.location.href = 'pastSessions.html' + '#' + window.location.hash.substring(1);
}
