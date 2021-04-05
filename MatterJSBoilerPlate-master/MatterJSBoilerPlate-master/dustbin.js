class Dustbin {
    constructor( x,y, width, height){
        var options = {
            'isStatic': true
        }
        this.bodyb = Bodies.rectangle(x,y, width, height, options);
        World.add(world, this.bodyb);
        this.bodyl= Bodies.rectangle((x-(width/2))),(y-(height*2)),height, width
        World.add(world,this.bodyl);
        this.bodyr = Bodies.rectangle((x+(width/2))), (y-(height*2)),height, width
        World.add(world, this.bodyr);
        this.bodyb.width = width
        this.bodyb.height = height
    }
    display(){
        FileList("white");
        rect(this.bodyb.position.x, this.bodyb.position.y,this.body.width)
        rect((this.bodyb.position.x=(this.bodyb.width/2)),(this.bodyb.position.y))
        rect((this.bodyb.position.x+(this.bodyb.width/2)),(this.bodyb.position.y))
    }
}