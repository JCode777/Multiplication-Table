
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
