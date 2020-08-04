class ObjectManager{
    constructor(){
        this.objectArray=[]; 
    }
    addObject(obj){
        this.objectArray.push(obj);
    }
    removeObject(){

    }
    tick(){
        for(var i=0;i<this.objectArray.length;i++){
            this.objectArray[i].tick();
        }
    }
    render(){
        for(var i=0;i<this.objectArray.length;i++){
            this.objectArray[i].render();
        }
    }
}