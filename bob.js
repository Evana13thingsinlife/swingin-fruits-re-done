class bob{
    constructor(x,y){
        var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		//this.r=r;
		
		this.body=Bodies.circle(this.x, this.y, 10, options);

		this.image = loadImage("images/fruits7.png");

		World.add(world, this.body);

	}

    display (){
        var pos= this.body.position;
		
		imageMode(CENTER);
        image(this.image, pos.x, pos.y, 40, 90);

        // this.Visiblity = 255;
        // this.Visiblity = this.Visiblity - 5;
        // tint(255,this.Visiblity);

    }


    score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score++;
        }
      }
};







