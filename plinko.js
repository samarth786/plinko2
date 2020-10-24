class plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.r = 15
      this.body = Bodies.circle(x, y, this.r ,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
     // rectMode(CENTER);
     // fill("255");
     fill(255);
      ellipseMode(RADIUS);
    //  ellipse(pos.x, pos.y, this.r/2, this.r/2);
     ellipse(0,0,this.r/2, this.r/2);
     pop();
    }
  };
