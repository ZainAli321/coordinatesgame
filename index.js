xcoordinate = document.getElementById("x-c");
ycoordinate = document.getElementById("y-c");

// of function randomCordinates
xrandom = Math.floor(Math.random() *1366 );
yrandom = Math.floor(Math.random() *624);

document.getElementById("wrapper").addEventListener("mousemove" , coordinateCurrent );

function randomCoordinates() {

    xrandomp.innerHTML += xrandom;
    yrandomp.innerHTML += yrandom;
}

function coordinateCurrent(event) {
    if (event.shiftKey === true) {
        xcoordinate.innerHTML = event.clientX;  // x ( 0-1365 )
        ycoordinate.innerHTML = event.clientY;  // y ( 0-624 )      
    }
    function checkWinner () {
        if (xrandom == xcoordinate.innerHTML && yrandom == ycoordinate.innerHTML) {
            document.getElementById("Winner").style.display = "inline";
            
        }

    }
    checkWinner();
}


// function checkWinner () {
//     if (xrandom == xcoordinate.innerHTML && yrandom == ycoordinate.innerHTML) {
//         console.log("You HAve WOn")
//     }
// }
randomCoordinates();  // Select Random Coordinates and Display them
