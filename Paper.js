class Paper {
    constructor(r){
        var paper_options = {
            restitution : 0,
            density : 1.2,
            isStatic : false,
            friction : 0
        }
        
        this.body = Bodies.circle(300, 400, 20, paper_options);
        this.r = 20;
        this.x = 300;
        this.y = 400;
        
        World.add(world, this.body);

      
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        this.image = loadImage("paper.png");
        push();
        rotate(angle);
         imageMode(CENTER);    
         circle(pos.x,pos.y, this.r,this.image);
        pop();
    }
}