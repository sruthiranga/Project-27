class string{
constructor(bodyA, bodyB, offsetx, offsety){
    this.offsetx = offsetx
    this.offsety = offsety
    var options = {
        bodyA : bodyA,
        bodyB : bodyB,
        pointB:{x:this.offsetx, y:this.offsety},
        length: 200,
        stiffness: 0.5
    }
    //this.pointB = pointB;
    this.string = Matter.Constraint.create(options);
    World.add(world, this.string);
}

    display(){
        var posA =  this.string.bodyA.position;
        var posB = this.string.bodyB.position;
        console.log(posB);
        var connectorx = posB.x+this.offsetx;
        var connectory = posB.y+this.offsety;
        line(posA.x, posA.y, connectorx, connectory);
    }
}