// Getting account information based on account id
function gettingAccountInfo() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let account = JSON.parse(xhttp.responseText);

        document.getElementById("accountPName").innerText = account[0].name;
        document.getElementById("accountPEmail").innerText = account[0].email;
      }
    };

    xhttp.open('POST', 'getAccountWithID.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({"account_id": window.location.hash.substring(1)}));
}

// Updating name in database
function newName() {
    var form = document.getElementById("nameAccountChange");
    var newName = form.children[0].value;
    var password = form.children[1].value;
    var account_id = window.location.hash.substring(1);

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          // DO SOMETHING IF WRONG PASSWORD
      }
    };

    xhttp.open('POST', 'changeAccountName.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({"account_id": account_id, "name": newName, "password": password}));
}

// Updating email in database
function newEmail() {
    var form = document.getElementById("emailAccountChange");
    var email = form.children[0].value;
    var password = form.children[1].value;
    var account_id = window.location.hash.substring(1);

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          // DO SOMETHING IF WRONG PASSWORD
      }
    };

    xhttp.open('POST', 'changeAccountEmail.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({"account_id": account_id, "email": email, "password": password}));
}

// Updating password in database
function newPassword() {
    var form = document.getElementById("passwordAccountChange");
    var newPassword = form.children[0].value;
    var password = form.children[1].value;
    var account_id = window.location.hash.substring(1);

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          // DO SOMETHING IF WRONG PASSWORD
      }
    };

    xhttp.open('POST', 'changeAccountPassword.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({"account_id": account_id, "newPassword": newPassword, "password": password}));
}

function deleteAccount() {

}

function backButton() {
    window.location.href = 'map.html' + '#' + window.location.hash.substring(1);
}
