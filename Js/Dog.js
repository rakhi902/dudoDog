class Dog extends BaseClass {
    constructor(x,y,width,height){
      super(x,y,width,height);
      this.image = loadImage("dog1.png");
      this.body=Bodies.rectangle(x,y,width,height)
    }
  
    display() {
    
      super.display();
    }
  }