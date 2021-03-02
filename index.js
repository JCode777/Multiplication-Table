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

document.getElementById('buttonBox').addEventListener('click', event => {
    if(event.target.id === 'one') {
        outputTable(1);
        changeColor('#801515');
    } else if(event.target.id === 'two') {
        outputTable(2);
        changeColor('#0D4D4D');
    } else if(event.target.id === 'three') {
        outputTable(3);
        changeColor('#116611'); 
    } else if(event.target.id === 'four') {
        outputTable(4);
        changeColor('#804515'); 
    } else if(event.target.id === 'five') {
        outputTable(5);
        changeColor('#591717'); 
    } else if(event.target.id === 'six') {
        outputTable(6);
        changeColor('#0E3636'); 
    } else if(event.target.id === 'seven') {
        outputTable(7);
        changeColor('#124812'); 
    } else if(event.target.id === 'eight') {
        outputTable(8);
        changeColor('#593517'); 
    } else if(event.target.id === 'nine') {
        outputTable(9);
        changeColor('#550000'); 
    } else if(event.target.id === 'ten') {
        outputTable(10);
        changeColor('#003333'); 
    } else if(event.target.id === 'eleven') {
        outputTable(11);
        changeColor('#004400'); 
    } else if(event.target.id === 'twelve') {
        outputTable(12);
        changeColor('#552700'); 
    }
});
