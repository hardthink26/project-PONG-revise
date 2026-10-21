class GameView {
    constructor(){
    let canvas = document.querySelector("#canvas");
    this.ctx = canvas.getContext("2d");
    this.height = canvas.height;
    this.width = canvas.width; 
    this.offsetTop = canvas.offsetTop

    }

    draw(...entities){
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.width, this.height);

    entities.forEach((entity) => entity.draw(this.ctx))
    }

    drawScores(scores){
    this.strokeStyle = "white";
    this.font = "30px monospace";
    this.ctx.textAlign = "left";
    this.ctx.fillText(scores.leftScore.toString(), 50, 50);
    this.ctx.textAlign = "right";
    this.ctx.fillText(scores.rightscore.toString(), this.width - 50, 50);
    }

    drawGameOver(){
    this.ctxfillStyle = "white";
    this.font = "30px monospace"
    ctx.textAlign = "center";
    ctx.fillText("Game Over", width/2, height / 2);
    }
}


class Entity { 
    constructor(x, y, height, width){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width; 
    }

    boundingBox(){ 
    return {
    left : this.x,
    right : this.x + this.width,
    top : this.y,
    bottom : this.y + height
    } 
    } 

    draw(ctx){
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    } 
} 


class Paddle extends Entity{
    static WIDTH = 5;
    static HEIGHT = 20;
    static OFFSET = 10;

    constructor(x, y){
    super(x, y, Paddle.WIDTH, Paddle.HEIGHT);
    }
}


class Ball extends Entity{
    static SIZE = 5; 

    constructor(){ 
    super(0, 0, Ball.SIZE, Ball.SIZE);
    init();
    }

    init(){
    Ball.x = 20;
    Ball.y = 30; 
    Ball.xSpeed = 2;
    Ball.ySpeed = 4; 
    } 

    update(){
    Ball.x += Ball.xSpeed;
    Ball.y += Ball.ySpeed; 
    } 

    adjustAngle(distanceFromTop, distanceFromBottom){
    if(distanceFromTop < 0){
    //If ball hit near top of paddle, reduce ySpeed
        Ball.y -= 0.5;
    }else if(distanceFromBottom < 0 ){
    //If ball hit near bottom of paddle, increase ySpeed
        Ball.y += 0.5 ;
    }
    } 

    









    