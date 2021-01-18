class Chain {
    constructor(bodyA,pointB,offsetX,offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);        
    }
}
