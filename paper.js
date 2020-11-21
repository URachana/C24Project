class crumpledPaper{

    constructor(x,y,r) {

        var options={

            restitution : 0.3,
            friction : 0.5,
            density: 5,
            isStatic: false
        }

        this.body= Bodies.circle(x,y,r,options);
        World.add(myWorld,this.body);
        this.radius= r 
    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }


}