class trash {
  constructor(x,y,width,height) {
      var opt = {isStatic: true};
      this.body = Bodies.rectangle(x,y,width,height, opt);
      this.width = width;
      this.height = height;
      this.image = loadImage("Sprites/trash.png")
      World.add(world, this.body);
  }
  display() {
      var pos = this.body.position;

      imageMode(CENTER);
      fill("gray");
      image(this.image, pos.x, pos.y, this.width, this.height);

  }
}