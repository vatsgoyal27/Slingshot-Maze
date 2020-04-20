class bird {

    constructor(x, y, width, height) {
        var options ={
            restitution: 1,
            friction: 2
        }
        this.x
        this.y
        this.width
        this.height
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
        display() {
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            rotate(angle);
            rectMode(CENTER);
            fill("brown");
            stroke("brown");
            rect(pos.x, pos.y, this.width, this.height);
            pop();
        }
    }