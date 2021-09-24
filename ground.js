class ground {
    constructor() {
        var options = {
            isStatic: true
        }
       
        this.w = 800;
        this.h = 10;
        this.body = Bodies.rectangle(400,795,800,10, options);

        
        World.add(world, this.body);

    }
    display() {

        var groundPos = this.body.position;
      rectMode(CENTER);
        rect( groundPos.x, groundPos.y, this.w, this.h);
    }

}