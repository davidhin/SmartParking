// Gets account name first then posts review
function submitReviewName() {
    var account_id = window.location.hash.split('#')[1]

    // Getting account name
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let name = JSON.parse(xhttp.responseText);
        submitReview(name[0].name, account_id);
      }
    };

    xhttp.open('post', 'getAccountNameWithID.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({"account_id": account_id}));
}

// Sending review to server
function submitReview(name, account_id) {
    console.log("hello");
    var textReview = document.getElementById("reviewTextArea").value;
    var stars = document.getElementsByClassName("star");

    var starCount = 0;
    for(var i=0; i<5; i++) {
        if(stars[i].innerHTML.charCodeAt()==10025) {
            starCount++;
        }
    }

    // Posting review
    let xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
    //     let name = JSON.parse(xhttp.responseText);
    //     submitReview(name[0].name, account_id);
    //   }
    // };

    xhttp.open('post', 'postingReview.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({"account_id": account_id, "parking_id": window.location.hash.split('#')[2], "stars": starCount, "review": textReview, "name": name}));

    // console.log(starCount);
    // console.log(textReview);
    // console.log(name);
    // console.log(account_id);
}

// Code to change the stars based on input
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
    window.location.href = 'pastSessions.html' + '#' + window.location.hash.split('#')[1];
}
