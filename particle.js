class Particle{

    constructor(pos, offset){
        this.pos = pos;
        this.offset = offset;
        this.s = random(90,250);
        this.o = random(10,150);
        this.c = color(random(150,250),random(240,250), 255, this.o);
        this.speed = random(0.0001, 0.001);
    }

    show(){
        fill(this.c);
        noStroke();
        circle(this.pos.x,this.pos.y, this.s);

        this.pos.x = noise(this.offset.x);
        this.pos.x = map(this.pos.x, 0 ,1, -width/2, width+width/2);
        
        this.pos.y = noise(this.offset.y);
        this.pos.y = map(this.pos.y, 0 ,1, -height/2, height + height/2);

        this.s = noise(this.offset.z);
        this.s = map(this.s, 0, 1, 50, 300);
    }

    update(){
        this.offset.x += this.speed;
        this.offset.y += this.speed;
        this.offset.z += this.speed * 3;
    }
}