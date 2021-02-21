class Arrow {
    constructor(x,y){
        var options = {
            restitution: 2,
            density: 0.3,
            airFriction: 0.4,
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        //rectMode(CENTER);
        //rect(pos.x,pos.y,this.width,this.height);
        image(arrowImage,100,100,100,100);
    }
}