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

function fillAccordion(sessions) {
    var body = document.getElementById('sessionsBody');

    for(var i=0; i<sessions.length; i++) {
        var wholeAcc = document.createElement("DIV");
        wholeAcc.classList.add("wholeAcc");
        var button = document.createElement("BUTTON");
        button.classList.add("reviewButt");
        button.onclick = function() {
            location.href = 'reviewPage.html' + '#' + window.location.hash.substring(1);
        }
        button.innerText = "Review";
        wholeAcc.appendChild(button);

        var acc = document.createElement("DIV");
        acc.classList.add("accordion");
        var accLabel = document.createElement("P");
        accLabel.classList.add("accordLabel");
        accLabel.innerText = sessions[i].date;
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
        time.innerText = sessions[i].startTime;
        panel.appendChild(time);
        panel.appendChild(document.createElement("BR"));

        var hPrice = document.createElement("H6");
        hPrice.innerText = "Price:";
        panel.appendChild(hPrice);
        var Price = document.createElement("P");
        Price.classList.add("price");
        Price.innerText = sessions[i].cost;
        panel.appendChild(Price);
        panel.appendChild(document.createElement("BR"));

        var hType = document.createElement("H6");
        hType.innerText = "Time Parked:";
        panel.appendChild(hType);
        var type = document.createElement("P");
        type.classList.add("type");
        type.innerText = sessions[i].type;
        panel.appendChild(type);
        body.appendChild(panel);

    }

    accordionCode();
}

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

    /* Review button */
}

function backButton() {
    window.location.href = 'map.html' + '#' + window.location.hash.substring(1);
}
