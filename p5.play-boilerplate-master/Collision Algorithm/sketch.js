var fixedRect, movingRect;




function setup() {
  createCanvas(1200,800);
    fixedRect = createSprite(200, 200, 50, 80);
    fixedRect.shapeColor = "cyan";
    movingRect = createSprite(400, 200, 80, 30);
    movingRect.shapeColor = "cyan";
    

}

function draw() {
    background("navy");  
    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;
    console.log(movingRect.x - fixedRect.x);
    if (movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2
        && fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2
        && movingRect.y - fixedRect.y < fixedRect.width / 2 + movingRect.width / 2
        && fixedRect.y - movingRect.y < fixedRect.width / 2 + movingRect.width / 2
    ) {

        movingRect.shapeColor = "cyan";
        fixedRect.shapeColor = "cyan";
        background("navy");


    } else {
        movingRect.shapeColor = "navy";
        fixedRect.shapeColor = "navy";
        background("cyan");
    }

        drawSprites();
}