class Monster{
    constructor(){
        if(frameCount % 200 === 0){
            this.monster = createSprite(Math.round(random(0, width)), Math.round(random(0, height)), 50, 50);
            this.monster.velocityX = Math.round(random(-10, 10));
            this.monster.velocityY = Math.round(random(-10, 10));
        }
    }
}