class Monster{
    constructor(x,y,r){
        var options={
             isStatic:false,
             restitution:0.004,
             density:1,
             friction:1
        }
        this.r=r;
        this.image=loadImage("images/Monster-01.png");
        this.body=Bodies.circle(x,y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){
       var pos = this.body.position;
       var angle = this.body.angle;

       push();
       translate(pos.x,pos.y);
       rectMode(CENTER);
       imageMode(CENTER);
       rotate(angle);
       image(this.image,0,0,this.r,this.r);
       pop();
    }
};