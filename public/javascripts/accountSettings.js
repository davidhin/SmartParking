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

function backButton() {
    window.location.href = 'map.html' + '#' + window.location.hash.substring(1);
}
