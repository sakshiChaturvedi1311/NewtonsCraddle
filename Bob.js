class Bobs{
    constructor(x, y) {
        var options = {
            'restitution':0.5,
            'friction':0,
            'density':0.8
        }
        this.body = Bodies.circle(x, y, 30, options);
        //this.width = 60;
        //this.r = 60;
        World.add(world, this.body);
      }
      display(){
        
        var pos =this.body.position;

        push();
        //translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke(17,0,3)
        fill(252,3,66);
        ellipse(pos.x,pos.y,60);
        pop();
      }
}