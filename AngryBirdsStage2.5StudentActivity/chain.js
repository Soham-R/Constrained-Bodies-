class chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA, bodyB:bodyB,
            stiffness: 0.04, length: 15
        }
        this.chain = constraint.create(options)
        World.add(world, this.chain)
        

    }
    display(){
        strokeWeight(5)
    line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y)
    }
}