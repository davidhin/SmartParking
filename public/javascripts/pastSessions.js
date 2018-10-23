// Getting past sessions attributed to account id
function getSessions() {
    var account_id = window.location.hash.substring(1);

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let sessions = JSON.parse(xhttp.responseText);
        fillAccordion(sessions);
      }
    };

    xhttp.open('post', 'getPastSessionWithID.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({"account_id": account_id}));
}

// Creating elements for each accordion segment
function fillAccordion(sessions) {
    var body = document.getElementById('sessionsBody');

    for(var i=0; i<sessions.length; i++) {
        var wholeAcc = document.createElement("DIV");
        wholeAcc.classList.add("wholeAcc");
        var button = document.createElement("BUTTON");
        button.classList.add("reviewButt");
        button.onclick = function() {
            // Getting parking_id from hidden element
            var parking_id = this.parentElement.nextElementSibling.getElementsByClassName("hidden_parking_id_session")[0].innerText;
            location.href = 'reviewPage.html' + '#' + window.location.hash.substring(1) + '#' + parking_id;
        }
        button.innerText = "Review";
        wholeAcc.appendChild(button);

        // Visible accordion label
        var acc = document.createElement("DIV");
        acc.classList.add("accordion");
        var accLabel = document.createElement("P");
        accLabel.classList.add("accordLabel");

        // Formatting date
        var date = new Date(sessions[i].date);
        var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        // Label for visible accordion label
        accLabel.innerText = days[date.getDay()] + ' ' + date.getDate() + '/' + date.getMonth() + '/' + String(date.getFullYear()).slice(-2) + ' - ' + String(sessions[i].address).split(',')[2];
        acc.appendChild(accLabel);
        wholeAcc.appendChild(acc);
        body.appendChild(wholeAcc);

        var panel = document.createElement("DIV");
        panel.classList.add("panel");
        var hLoc = document.createElement("H6");
        hLoc.innerText = "Location:";
        panel.appendChild(hLoc);
        var loc = document.createElement("P");
        loc.classList.add("location");
        loc.innerText = sessions[i].address;
        panel.appendChild(loc);
        panel.appendChild(document.createElement("BR"));

        var hTime = document.createElement("H6");
        hTime.innerText = "Time Parked:";
        panel.appendChild(hTime);
        var time = document.createElement("P");
        time.classList.add("time");
        time.innerText = String(sessions[i].startTime).split(':')[0] + ':' + String(sessions[i].startTime).split(':')[1] + ' - ' + String(sessions[i].endTime).split(':')[0] + ':' + String(sessions[i].endTime).split(':')[1];
        panel.appendChild(time);
        panel.appendChild(document.createElement("BR"));

        var hPrice = document.createElement("H6");
        hPrice.innerText = "Price:";
        panel.appendChild(hPrice);
        var Price = document.createElement("P");
        Price.classList.add("price");
        Price.innerText = '$' + sessions[i].cost.toFixed(2);
        panel.appendChild(Price);
        panel.appendChild(document.createElement("BR"));

        var hType = document.createElement("H6");
        hType.innerText = "Time Parked:";
        panel.appendChild(hType);
        var type = document.createElement("P");
        type.classList.add("type");
        type.innerText = sessions[i].type;
        panel.appendChild(type);
        var hidden_parking_id = document.createElement("DIV");
        hidden_parking_id.classList.add("hidden_parking_id_session");
        hidden_parking_id.style.display = "none";
        hidden_parking_id.innerText = sessions[i].parking_id;
        panel.appendChild(hidden_parking_id);
        body.appendChild(panel);

    }

    accordionCode();
}

// Code to make hidden panel element appear
function accordionCode() {
    // Accordian function
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.parentElement.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

// Sending account id and parking id to review page
function reviewSessionButton(index) {
    window.location.href = 'reviewPage.html' + '#' + window.location.hash.substring(1);
}

function backButton() {
    window.location.href = 'map.html' + '#' + window.location.hash.substring(1);
}
