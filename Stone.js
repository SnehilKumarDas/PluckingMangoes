class Stone{
    constructor(x,y,r){

        this.image = loadImage("stone.png")
        this.body = Bodies.circle(x,y,r/2,{isStatic:true})
        this.r = r
        World.add(world,this.body)

    }

    display(){
 
        push();
        var pos = this.body.position
        translate(pos.x,pos.y);
        rotate(this.body.angle)
        image(this.image,0,0,40,50)
        pop();

        
    }
}