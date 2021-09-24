class Monkey {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(600,500,50,100,options);
      this.width = width;
      this.image=loadImage("images/monkey stand.png");
      this.height = height;
      World.add(world, this.body);
     

    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
     image(this.image,pos.x,pos.y,this.width,this.height);
    }
  };