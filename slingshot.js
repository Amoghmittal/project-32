class Slingshot{
    constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    length:50,
    stiffness:1,
}
this.sling=Matter.Constraint.create(options);
this.pointB=pointB;
World.add(world,this.sling)
    }
display(){
    strokeWeight(3)   
    if(this.sling.bodyA){
     line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,
        this.pointB.x,this.pointB.y) 
     }
}
fly(){
    this.sling.bodyA=null;
}
attach(body){
    this.sling.bodyA=body;
}
attach(body){
    this.sling.bodyA=body;
}


}
