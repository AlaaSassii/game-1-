const canvas = document.querySelector('canvas') ; 
console.log(canvas)  ; 
const c =  canvas.getContext('2d') ; 
console.log(c);

canvas.height = innerHeight ; 
canvas.width = innerWidth ; 


// class 
class Player {
    constructor(x , y , radius , color){
         this.x  = x ; 
         this.y = y
         this.radius  = radius
         this.color = color 
    }
    // draw player 
    draw(){
        c.beginPath() ; 
        c.arc(this.x ,this.y ,this.radius , 0 ,Math.PI * 2 , false) ; 
        c.fillStyle = this.color ; 
        c.fill()
    }
}
class Projectile {
    constructor(x , y , radius , color , velocity){
        this.x = x ; 
        this.y = y ; 
        this.radius = radius ; 
        this.color = color ; 
        this.velocity = velocity ;
    }

    draw(){
        c.beginPath(); 
        c.arc(this.x , this.y , this.radius , 0 ,Math.PI *2 , false) ; 
        c.fill() ;
    }
}

const x = canvas.width / 2  ; 
const y = canvas.height / 2  ; 

const player = new Player(x , y , 30 , 'deeppink') ; 
player.draw();
console.log('player',player);
// window 
addEventListener('click', (e)=>{
    const projectile = new Projectile(e.clientX , e.clientY , 5 ,  'red' , null) ; 

    projectile.draw() ;

})






