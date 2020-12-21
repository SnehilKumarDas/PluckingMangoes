class Mango{
    constructor(x,y){

        this.image = loadImage("mango.png")
        this.body = Bodies.rectangle(x,y,20,20,{isStatic:true})
        this.width = 50
        this.height = 50
        World.add(world,this.body)

    }

    display(){
 
        push();
        var pos = this.body.position
        translate(pos.x,pos.y);
        rotate(this.body.angle)
        image(this.image,0,0,this.width,this.height)
        pop();

        
    }
}