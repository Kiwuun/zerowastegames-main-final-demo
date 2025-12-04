const STEP_SIZE = 8;


class Garbage {
  constructor(x, y, size, image, type) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.image = image;
    this.type = type;

    this.falling = true;
  }

  moveLeft(){
    this.x = Math.max(0, this.x - STEP_SIZE);
  }

  moveRight(canvasWidth){
    this.x = Math.min(canvasWidth - this.size, this.x + STEP_SIZE);
  }

  clicked(x, y) {
    return (
      x > this.x &&
      x < this.x + this.size &&
      y > this.y &&
      y < this.y + this.size
    );
  }

  isColliding(other) {
    return (
      this.x < other.x + other.size &&
      this.x + this.size > other.x &&
      this.y < other.y + other.size &&
      this.y + this.size > other.y
    );
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
  }
}

