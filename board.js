function Tablero(w, h){
    this.width = w;
    this.height = h;
    this.color = 255;


    this.show = function(){
        fill(0,0,this.color);
        rect(0,0,this.width,this.height);
    };
}