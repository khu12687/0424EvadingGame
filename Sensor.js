class Sensor extends GameObject{
    constructor(objectid,container,src,width,height,velX,velY,x,y){
        super(objectid,container,src,width,height,velX,velY,x,y);
        this.div.style.border="1px solid red";
    }
    tick(){
        // this.x=pic.x;
        // this.y=pic.y;
    }
    
    render(){
        // this.div.style.left=this.x+"px";
        // this.div.style.top=this.y+"px";
        // console.log(this.x)
    }
}