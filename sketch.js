var gamestate = 1 
function preload(){
    runnerAni = loadAnimation("Runner-1.png","Runner-2.png")
    trackImg = loadImage("road.png")
    stoneImg = loadImage("stone.png")
}

function setup() {
    createCanvas(400,400);
   

    track = createSprite(200,200,400,400)
    track.addImage(trackImg)
    track.scale = 4.5
    
    runner = createSprite(200,350,20,20)
    runner.addAnimation("Runner",runnerAni)
    runner.scale = 0.1
    stoneG = createGroup()
}

function draw() {
    background("white")
    if(gamestate===1){
    runner.x = mouseX
    track.velocityY = 3
if(track.y > 400){
  track.y = 0
}

if(frameCount%60===0){
     
    stone = createSprite(random(50,350),0,400,400)
    stone.addImage(stoneImg)
    stone.scale = 0.1
    stone.velocityY = 3
    stoneG.add(stone)
}
    if(runner.isTouching(stoneG)){
        gamestate = 0
    }
    }
    drawSprites()
    if(gamestate===0){
        track.velocityY = 0 
        stoneG.setVelocityYEach(0)
        runner.destroy()
        textSize(20)
text("Game Over",150,200)
    }

}