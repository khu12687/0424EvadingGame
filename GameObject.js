class GameObject{
    constructor(objectid,container,src,width,height,velX,velY,x,y){
        this.objectid=objectid;
        this.container=container;
        this.img=document.createElement("img");
        this.div=document.createElement("div");
        this.src=src;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;
        this.x=x;
        this.y=y;
        this.img.src=this.src;
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        this.div.style.position="absolute";     
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.appendChild(this.img);
        this.container.appendChild(this.div);
    }
    tick(){}
    render(){}
}