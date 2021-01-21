class Hero{
    constructor(x,y,r){
        var options={
            isStatic:true,
            friction:1,
            density:1
        }
        this.r=r
        this.body=Bodies.circle(x,y,r,options);
        this.image=loadImage("images/Superhero-01.png");
        World.add(world,this.body);
    }
    display(){
        var heroPos=this.body.position;

        push();
        translate(heroPos.x,heroPos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
};