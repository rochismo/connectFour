function Disk(x, y, color){
    this.width = floor(width*0.25 / 2);
    this.x = floor(x);
    this.y = floor(y);
    this.color = color;
    this.filled = false;

    this.show = function(){
        stroke(0);
        fill(this.color);
        ellipse(this.x, this.y, this.width);
    };

    this.getQuantity = function(){
        console.log();
        return floor((width / this.width) * (height / this.width));
    };

    this.getPosX = function(){
        return floor(this.width * 0.50);
    };

    this.getPosY = function(){
        return floor(this.width * 0.50);
    };
}