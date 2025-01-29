var inputOneIsOn = false;
var inputTwoIsOn = false;

function toggleImage(elementId) {
    var imgElement = document.getElementById(elementId);
    imgElement.src = imgElement.src.includes('off') ? 'on.png' : 'off.png';
}

function toggleInputOne() {
    inputOneIsOn = !inputOneIsOn;
}

function toggleInputTwo() {
    inputTwoIsOn = !inputTwoIsOn;
}

// The "and" function remains unchanged
function and() {
    var a = inputOneIsOn;
    var b = inputTwoIsOn;

    console.log('Input one is on: ', inputOneIsOn);
    console.log('Input two is on: ', inputTwoIsOn);

    if (a && b)
        document.getElementById('andGate').src = 'and2on.png';
    else if (!a && b)
        document.getElementById('andGate').src = 'andoffon.PNG';
    else if (a && !b)
        document.getElementById('andGate').src = 'andonoff.PNG';
    else if (!a && !b)
        document.getElementById('andGate').src = 'and2off.PNG';
}
