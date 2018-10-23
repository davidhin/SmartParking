/* window.location.hash.substring(2); To get the parking space id */

// Creating elements to fill the dropdown menu
// Gets associated payment options
function fillPaymentOptions() {
    var account_id = window.location.hash.substring(1);

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var options = JSON.parse(xhttp.responseText);
          var dropdown = document.getElementsByClassName("dropdown-content")[0];

          for(var i=0; i<options.length; i++) {
              var aElement = document.createElement("A");
              aElement.innerText = options[i].payment_option;
              // Onclick, show input text box and set placeholder text
              aElement.onclick = function() {
                  var input = document.getElementById("paymentInput");
                  dropdown.style.display = "none";
                  input.placeholder = "Insert " + this.innerText + " number";
                  var input = document.getElementById("paymentInput");
                  input.style.display = "block";
              }
              dropdown.appendChild(aElement);
          }
      }
    };

    xhttp.open('POST', 'getPaymentOptions.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({"account_id": account_id}));
}

// Incrementing hour tumbler
function hoursUp() {
    var element = document.getElementById("hoursNum");
    var num = parseInt(element.innerText, 10);
    num += 1;
    if(num==13) {
        num = 0;
    }
    element.innerText = num;
    updateCost();
}

// Decrementing hour tumbler
function hoursDown() {
    var element = document.getElementById("hoursNum");
    var num = parseInt(element.innerText, 10);
    num -= 1;
    if(num==-1) {
        num = 12;
    }
    element
    element.innerText = num;
    updateCost();
}

// Incrementing minute tumbler
function minutesUp() {
    var element = document.getElementById("minutesNum");
    var num = parseInt(element.innerText, 10);
    num += 15;
    if(num==60) {
        num = 0;
    }
    element.innerText = num;
    updateCost();
}

// Decrementing hour tumbler
function minutesDown() {
    var element = document.getElementById("minutesNum");
    var num = parseInt(element.innerText, 10);
    num -= 15;
    if(num==-15) {
        num = 45;
    }
    element.innerText = num;
    updateCost();
}

// Updating cost value based on time selected and price of parking space
function updateCost() {
    var minutes = parseInt(document.getElementById("minutesNum").innerText, 10);
    var hours = parseInt(document.getElementById("hoursNum").innerText, 10);

    var dollar = document.getElementById("dollar");
    var costConstant = String(window.location).split("#")[2];

    var cost = ((hours + minutes/60) * costConstant).toFixed(2);

    document.getElementById("dollar").innerText = cost;
}

// Processing date and time information to create new parking session
function startSession() {
    var minutes = parseInt(document.getElementById("minutesNum").innerText, 10);
    var hours = parseInt(document.getElementById("hoursNum").innerText, 10);
    var cost = document.getElementById("dollar").innerText;
    var account_id = String(window.location).split("#")[1];
    var parking_id = String(window.location).split("#")[3];

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0
    var yyyy = today.getFullYear();
    var min = today.getMinutes();
    var hour = today.getHours();
    var endHour = hour + hours;
    var endMin = min + minutes;

    // Adding Leading zeros and fixing looping over
    if(endMin>=60) {
        endHour += 1;
        endMin -= 60;
    }

    if(endMin<9) {
        endMin = '0' + endMin;
    }

    if(min<9) {
        min = '0' + min;
    }

    if(endHour>=24) {
        endHour -= 24;
    }

    if(endHour<9) {
        endHour = '0' + endHour;
    }

    if(hour<9) {
        hour = '0' + hour;
    }

    var startTime = hour + ':' + min + ':00';
    var endTime = endHour + ':' + endMin + ':00';

    if(dd<10) {
    dd = '0'+dd
    }

    if(mm<10) {
        mm = '0'+mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);
    console.log(startTime);
    console.log(endTime);

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        window.location.href = 'map.html' + '#' + window.location.hash.split('#')[1];
      }
    };

    xhttp.open('POST', 'createNewSession.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({
        "account_id": account_id,
        "parking_id": parking_id,
        "startTime": startTime,
        "endTime": endTime,
        "date": today,
        "cost": cost
    }));
}

// Showing pay button on input for input text box
function payButtonShow() {
    document.getElementById("payButton").style.display = "block";
}

// Hide/show dropdown menu
function dropdownShow() {
    var dropdown = document.getElementsByClassName("dropdown-content")[0];
    if(dropdown.style.display=="block") {
        dropdown.style.display = "none";
    }else {
        dropdown.style.display = "block";
    }
}

// Go back to menu page, only pass account id back via url
function backButton() {
    window.location.href = 'map.html' + '#' + window.location.hash.split('#')[1];
}
