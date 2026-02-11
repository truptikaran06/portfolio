const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");
let w, h;
let stars = [];
let scrollSpeedFactor = 1; // multiplier for star speed based on scroll

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

class Star {
  constructor() { this.reset(); }
  reset() {
    this.x = (Math.random() - 0.5) * w;
    this.y = (Math.random() - 0.5) * h;
    this.z = Math.random() * w;
    this.radius = Math.random() * 1.2;
    this.hue = 200 + Math.random() * 60;
  }
  update() {
    this.z -= 0.4 * scrollSpeedFactor; // speed reacts to scroll
    if(this.z<1) this.reset();
  }
  draw() {
    const sx = (this.x/this.z)*w + w/2;
    const sy = (this.y/this.z)*h + h/2;
    if(sx<0 || sx>w || sy<0 || sy>h) return;
    const alpha = Math.min(1, (1 - this.z/w) + 0.2*scrollSpeedFactor); // pulse brightness
    ctx.fillStyle = `hsla(${this.hue},100%,80%,${alpha})`;
    ctx.beginPath();
    ctx.arc(sx, sy, this.radius,0,Math.PI*2);
    ctx.fill();
  }
}

for(let i=0;i<900;i++) stars.push(new Star());

function animate() {
  ctx.fillStyle="rgba(0,0,0,0.35)";
  ctx.fillRect(0,0,w,h);
  stars.forEach(s=>{s.update(); s.draw()});
  requestAnimationFrame(animate);
}
animate();

// Scroll listener to control star speed
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
  const delta = Math.abs(window.scrollY - lastScrollY);
  scrollSpeedFactor = 1 + Math.min(delta/50, 3); // cap speed factor
  lastScrollY = window.scrollY;
});
