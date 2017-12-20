var board;
var marcador1, marcador2;
var player1, player2;
var disk;
var list = [];
var quantity;

function setup() {
    createCanvas(window.innerWidth * 0.8, window.innerHeight * 0.8);
    board = new Tablero(width, height);
    disk = new Disk(width * 0.25 / 2, height * 0.5, 255);
    player1 = new Player(255,0,0);
    player2 = new Player(0,255,0);
    writeDisks();

}

function draw() {
    board.show();
    showDisks();
}

function writeDisks() {
    quantity = disk.getQuantity();
    var posX = disk.getPosX();
    var posY = disk.getPosY();
    for (var i = 0; i < quantity-1; i++) {
        list[i] = new Disk(posX, posY, 255);
        posX += list[i].width;
        if (posX >= width) {
            posY += list[i].width + 2.5;
            posX = disk.getPosX() + 2.5;
        }

    }

}

function showDisks() {
    for (var i = 0; i < list.length; i++) {
        list[i].show();
    }
}

function fillDisk(){
    for(var index in list){
        if (player1.turn && !list[index].filled){
            list[index].color = player1.color;
            player1.turn = false;
        } else if (player2.turn && !list[index].filled){
            list[index].color = player2.color;
            player2.turn = false;
        }
    }
}

function mousePressed(){
    if ()
}