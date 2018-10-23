// Getting payment options attributed to account id
function getPaymentOptions() {
    var account_id = window.location.hash.substring(1);

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var options = JSON.parse(xhttp.responseText);
          var body = document.getElementById("paymentOptionBody");

          // Creating payment option nodes
          for(var i=0; i<options.length; i++) {
              var optionNode = document.createElement("BUTTON");
              optionNode.classList.add("menuButton");
              optionNode.innerText = options[i].payment_option;
              body.appendChild(optionNode);
          }
      }
    };

    xhttp.open('POST', 'getPaymentOptions.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({"account_id": account_id}));
}

// Changes display of the input form
function addPaymentOption() {
    var panel = document.getElementsByClassName("panel")[0];
    if(panel.style.display=="inline-block") {
        panel.style.display = "none";
    }else {
        panel.style.display = "inline-block";
    }
}

// Adds new payment option to database
function add() {
    var paymentName = document.getElementsByTagName("input")[0].value;
    var account_id = window.location.hash.substring(1);

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          location.reload();
      }
    };
    xhttp.open('POST', 'addPaymentOption.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({"account_id": account_id, "payment_option": paymentName}));
}

function backButton() {
    window.location.href = 'map.html' + '#' + window.location.hash.substring(1);
}
