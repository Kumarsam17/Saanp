

//board
var blockSize = 25;
var rows = 20;
cols = 20;
var board;
var context;

//snake
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var snakeBody = [];

//speed of snake
var speeX = 0;
var speeY = 0;


//food
var foodX;
var foodY;

var gameOver = false;


window.onload = function () {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");//used for drawig board
    placceFood();
    document.addEventListener("keyup", changeDir)
    // update()
    setInterval(update, 1000 / 10);


}
function update() {
    if (gameOver) {
        return;
    }
    const COLOR_NAMES = [
        "AliceBlue",
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "BlueViolet",
        "Brown",
        "BurlyWood",
        "CadetBlue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "CornflowerBlue",
        "Cornsilk",
        "Crimson",
        "Cyan",
        "DarkBlue",
        "DarkCyan",
        "DarkGoldenRod",
        "DarkGray",
        "DarkGrey",
        "DarkGreen",
        "DarkKhaki",
        "DarkMagenta",
        "DarkOliveGreen",
        "DarkOrange",
        "DarkOrchid",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "DarkSlateBlue",
        "DarkSlateGray",
        "DarkSlateGrey",
        "DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "DimGray",
        "DimGrey",
        "DodgerBlue",
        "FireBrick",
        "FloralWhite",
        "ForestGreen",
        "Fuchsia",
        "Gainsboro",
        "GhostWhite",
        "Gold",
        "GoldenRod",
        "Gray",
        "Grey",
        "Green",
        "GreenYellow",
        "HoneyDew",
        "HotPink",
        "IndianRed",
        "Indigo",
        "Ivory",
        "Khaki",
        "Lavender",
        "LavenderBlush",
        "LawnGreen",
        "LemonChiffon",
        "LightBlue",
        "LightCoral",
        "LightCyan",
        "LightGoldenRodYellow",
        "LightGray",
        "LightGrey",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "LightSeaGreen",
        "LightSkyBlue",
        "LightSlateGray",
        "Silver",
        "SkyBlue",
        "SlateBlue",
        "SlateGray",
        "SlateGrey",
        "Snow",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Wheat",
        "White",
        "WhiteSmoke",
        "Yellow", "YellowGreen",
    ];
    
    context.fillStyle = "#bdd1f2";
    
    context.strokeStyle = "blue";
   

    context.fillRect(0, 0, board.width, board.height);


    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (foodX == snakeX && foodY == snakeY) {
        snakeBody.push([foodX, foodY]);
        placceFood();
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1]

    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY]
    }
    context.fillStyle = "lime";

    snakeX += speeX * blockSize;
    snakeY += speeY * blockSize;

    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillStyle = COLOR_NAMES[i];
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);

        document.getElementById('score').innerHTML = 'your score is ' + i;

    }
    if (snakeX < 0 || snakeX > cols * blockSize || snakeY < 0 || snakeY > rows * blockSize) {
        gameOver = true;
        alert("game over")
    }
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("game over")
        }
    }


}

function changeDir(e) {
    if (e.code == "ArrowUp" && speeY != 1) {
        speeX = 0;
        speeY = -1;
    }
    else if (e.code == "ArrowDown" && speeY != -1) {
        speeX = 0;
        speeY = 1;
    }
    else if (e.code == "ArrowLeft" && speeX != 1) {
        speeX = -1;
        speeY = 0;
    }
    else if (e.code == "ArrowRight" && speeX != -1) {
        speeX = 1;
        speeY = 0;
    }

}
function placceFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}