function setup() {
    createCanvas(500, 500);
    background('#acacac');
    r = random(255);
    g = random(255);
    b = random(255);

}
function mouseDragged() {
    socket.emit('kordinatner', [mouseX, mouseY,r,g,b]);
}
var socket;


function main() {
    socket = io.connect('http://localhost:3000');
    
    socket.on('drawte', gcel);

    function gcel(arr) {
            fill(arr[2],arr[3],arr[4]);

        ellipse(arr[0], arr[1], 20, 20);
    }
}

window.onload = main;