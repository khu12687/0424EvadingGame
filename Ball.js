class Ball extends GameObject{
    constructor(objectid,container,src,width,height,velX,velY,x,y){
        super(objectid,container,src,width,height,velX,velY,x,y);
    }
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;

        if(this.y+parseInt(this.img.style.height)>=600 ||this.y<=0){
            this.velY=-this.velY;
        }
        if(this.x+parseInt(this.img.style.width)>=600 ||this.x<=0){
            this.velX=-this.velX;
        }
    }
    render(){
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
    }
}