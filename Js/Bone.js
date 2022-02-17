class Bone extends BaseClass {
  constructor(x,y,width,height){
    super(x,y,width,height);
    this.image = loadImage("Bone.png");
  }

  display() {
    
    super.display();
  }

  score(){
    if(this.body.speed>0)
      score+=1;
  }
}