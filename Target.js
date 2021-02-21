class Target {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }

    display() {
        var pos = this.body.position;
        fill("red");
        strokeWeight(10);
        stroke("green");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.width,this.height)
    }
}