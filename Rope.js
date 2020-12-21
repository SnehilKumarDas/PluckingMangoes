class Rope{
    constructor(body1,point2){

        var options = {

            bodyA : body1,
            pointB : point2,
            stiffness : 1.2,
            length : 2
        }

        this.rope = Constraint.create(options)
        World.add(world,this.rope)
        this.pb = point2
    }

    fly(){
        
        this.rope.bodyA = null;
    }

    display(){

    var posA =  this.rope.bodyA.position
    var posB =  this.pb

    stroke("black")
    strokeWeight(3)
    line(posB.x,posB.y,posA.x,posA.y)

        if(this.rope.bodyA){
        var bodyA = this.rope.bodyA.position;
        var pointB = this.pointB;

   

    }
}
}
