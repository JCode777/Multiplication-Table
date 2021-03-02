function outputTable(num) {
    var i = 1;
    var msg ='';
    while(i < 13) {
        msg += num + ' x ' + i + ' = ' + (i * num) + '<br>';
        i++; 
    }

    // make the div appear
    var x = document.getElementById('innerBox');
    x.style.display = "block";

    // print multiplication table to the page
    document.getElementById('tableOutput').innerHTML = msg;
}

// change the color of the box surrounding the multiplication table
function changeColor(divColor) {

    var x = document.getElementById('innerBox');
    x.style.backgroundColor = divColor;

 }

let buttonNumberOne = document.getElementById('one');
let buttonNumberTwo = document.getElementById('two');
let buttonNumberThree = document.getElementById('three');
let buttonNumberFour = document.getElementById('four');
let buttonNumberFive = document.getElementById('five');
let buttonNumberSix = document.getElementById('six');
let buttonNumberSeven = document.getElementById('seven');
let buttonNumberEight = document.getElementById('eight');
let buttonNumberNine = document.getElementById('nine');
let buttonNumberTen = document.getElementById('ten');
let buttonNumberEleven = document.getElementById('eleven');
let buttonNumberTwelve = document.getElementById('twelve');

buttonNumberOne.addEventListener('click', function() {
    outputTable(1);
    changeColor('#801515');
});
buttonNumberTwo.addEventListener('click', function() {
    outputTable(2);
    changeColor('#0D4D4D');
});
buttonNumberThree.addEventListener('click', function() {
    outputTable(3);
    changeColor('#116611'); 
});
buttonNumberFour.addEventListener('click', function() {
    outputTable(4);
    changeColor('#804515'); 
});
buttonNumberFive.addEventListener('click', function() {
    outputTable(5);
    changeColor('#591717'); 
});
buttonNumberSix.addEventListener('click', function() {
    outputTable(6);
    changeColor('#0E3636'); 
});
buttonNumberSeven.addEventListener('click', function() {
    outputTable(7);
    changeColor('#124812'); 
});
buttonNumberEight.addEventListener('click', function() {
    outputTable(8);
    changeColor('#593517'); 
});
buttonNumberNine.addEventListener('click', function() {
    outputTable(9);
    changeColor('#550000'); 
});
buttonNumberTen.addEventListener('click', function() {
    outputTable(10);
    changeColor('#003333'); 
});
buttonNumberEleven.addEventListener('click', function() {
    outputTable(11);
    changeColor('#004400'); 
});
buttonNumberTwelve.addEventListener('click', function() {
    outputTable(12);
    changeColor('#552700'); 
});
