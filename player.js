class Player{
    constructor(x, y){

        this.player = createSprite(x, y, 50, 50);
        this.weapon = createSprite(1840, 700, 50, 50);

        

        this.name;
        this.distance;
        this.health;
        this.score;

        this.owernership = false;

    }

    move(){
        if(keyDown("up")){
            this.player.y = this.player.y-10;
        }
        if(keyDown("down")){
            this.player.y = this.player.y+10;
        }
        if(keyDown("left")){
            this.player.x = this.player.x-10;
        }
        if(keyDown("right")){
            this.player.x = this.player.x+10;
        }

        camera.x = this.player.x;
        camera.y = this.player.y;
    }

    pickWeapon(){
        //if(mousePressedOver(this.weapon)){
            this.owernership = true;
            this.weapon.x = this.player.x;
            this.weapon.y = this.player.y;
        //}
    }

    kill(){
        if(this.owernership === true){
            if(keyDown("x")){
                
            }
        }
    }

    
    

}