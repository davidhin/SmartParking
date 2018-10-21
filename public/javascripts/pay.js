/* window.location.hash.substring(2); To get the parking space id */

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

function updateCost() {
    var minutes = parseInt(document.getElementById("minutesNum").innerText, 10);
    var hours = parseInt(document.getElementById("hoursNum").innerText, 10);

    var dollar = document.getElementById("dollar");
    var costConstant = String(window.location).split("#")[1];

    var cost = ((hours + minutes/60) * costConstant).toFixed(2);

    document.getElementById("dollar").innerText = cost;
    // console.log(cost);
}

function backButton() {
    window.location.href = 'map.html' + '#' + window.location.hash.substring(1);
}
