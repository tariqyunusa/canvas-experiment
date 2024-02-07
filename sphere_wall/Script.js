// console.log("heelo ");
const canvas = document.querySelector("canvas")
var c = canvas.getContext('2d')
canvas.width = window.innerWidth
    canvas.height = window.innerHeight

// rectangle
// c.fillRect(200, 200, 100, 100)
// c.fillRect(900, 600, 100, 100)
// c.fillRect(700, 300, 100, 100)

// line
// c.beginPath()
// c.moveTo(100, 200)
// c.lineTo(300, 500)
// c.stroke()

// arc
// c.beginPath()
// c.arc(100, 200, 30, Math.PI * 2, false)
// c.stroke()

// for (let i = 0; i < 100; i++) {
// let x = Math.random() * window.innerWidth
// let y = Math.random() * window.innerHeight
// console.log(x, y);
// c.beginPath()
// c.arc(x, y, 30, Math.PI * 2, false)
// c.strokeStyle = "blue"
// c.stroke()

// }

var mouse = {
    x: undefined,
    y: undefined
}
var maxRadius = 40
// var minRadius = 2
var colorArray = [
    "#2C3E50",
    "#E74C3C",
    "#ECF0F1",
    "#3498DB",
    "#298089",
    
]

window.addEventListener("mousemove", function(e){
    // console.log(e);
    mouse.x = e.x
    mouse.y = e.y
    // console.log(mouse);
})
window.addEventListener("resize", function(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    init()
})

function circle(x, y, dx, dy, radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius= radius
    this.minRadius = radius
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

    this.draw = function(){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0 ){
            this.dy = -this.dy
        }
    
        this.x += this.dx
        this.y += this.dy

        // interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if(this.radius < maxRadius) {
                this.radius += 1
            }
            
        } else if(this.radius > this.minRadius) {
            this.radius -= 1
        }


        this.draw()
    }
}
var circleArray = []


function init(){
circleArray = []
for(let i = 0; i < 1000; i++){
    
var x = Math.random() * (innerWidth - radius * 2) + radius
var y = Math.random() * (innerHeight - radius * 2) + radius
var dx = (Math.random() - 0.5) 
var dy = (Math.random()- 0.5) 
var radius = Math.random() * 3 + 1
    circleArray.push(new circle(x, y, dx, dy, radius))
    
}
}
// console.log(circleArray);
function animate() {
    
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)
    
    for(let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
   

}
animate()
init()