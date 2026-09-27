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




    