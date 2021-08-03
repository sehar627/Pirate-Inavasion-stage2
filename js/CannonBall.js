class CannonBall {
    constructor(x, y,radius) {
      var options = {
       
      };
      this.radius=radius
  //create circular body
     
  //add Image
      
      World.add(world, this.body);
    }
  //shoot function
  
  
    display() {
     
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      //image function
     
      pop();
  
      }
    }