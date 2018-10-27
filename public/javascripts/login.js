function login() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let account = JSON.parse(xhttp.responseText);
        if(account.length==0) { // No matching account
            document.getElementById("hiddenErrorLogin").style.display = "block";
        }else {
            window.location.href = 'map.html' + '#' + account[0].account_id;
        }
      }
    };

    xhttp.open('POST', 'getAccount.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({"email": email, "password": password}));
}
