class Boy{

    constructor(){

        this.image = loadImage("boy.png")
        this.boy = Bodies.rectangle(180,550,250,350,{isStatic : true})
        this.width = 275
        this.height = 375
        World.add(world,this.boy)

    }

    display(){

        imageMode(CENTER)
        image(this.image,this.boy.position.x,this.boy.position.y,this.width,this.height)
    }
}