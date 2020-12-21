class Tree{
    constructor(){

        this.image = loadImage("tree.png")
        this.body = Bodies.rectangle(1300,360,570,250)
        this.width = 500
        this.height = 600
        //World.add(world,this.body)
    }

    display(){

       // rect(this.body.position.x,this.body.position.y,this.width,this.height)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)

    }
}