class Pic extends GameObject{
    constructor(objectid,container,src,width,height,velX,velY,x,y){
        super(objectid,container,src,width,height,velX,velY,x,y);
    }
    tick(){

        for(var i=0; i<objectManager.objectArray.length; i++){
            var gameObject = objectManager.objectArray[i];

            if(gameObject.objectid=="Ball"){
                for(var i=0; i<ballArray.length; i++){
                    var result = collisionCheck(this.div,ballArray[i].div);
                    if(result){
                        alert("game over");
                       
                    }
                }

            }
        }
    }
}