class rope{
    constructor(body1, body2, offsetX, offsetY)
    {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options={
            bodyA: body1,
            bodyB:body2,
           pointB:{x:this. offsetX, y:this. offsetY}
          
        }
        this.rope = Constraint.create(options);
        this.image = loadImage("images/vine1.png");
        World.add(world,this.rope)
    }
    display (){
      var pointA = this.rope. bodyA.position;
      var pointB = this.rope. bodyB.position;

      strokeWeight(2);
      var Anchor1X = pointA.x
      var Anchor1Y = pointA.y
      var Anchor2X = pointB.x + this.offsetX
      var Anchor2Y = pointB.y + this.offsetY
      imageMode(CENTER);
        image(this.image, pointA.x, pointB.y, 700,900);
    }
}