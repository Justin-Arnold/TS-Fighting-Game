import './tailwind.css'
import { Ninja, Samurai } from './sprite'

// Create the canvas and append it to the DOM
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="h-screen w-screen bg-black grid place-items-center overflow-hidden py-8">
        <canvas id="canvas" height="512" width="1024" class="bg-white"></canvas>
    </div>
`

// Get the canvas and its context
const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!
const ctx = canvas.getContext('2d')!

// Define the player and enemy
const enemy = new Samurai({ x: 800, y: -150 })
const player = new Ninja({ x: 100, y: -150 })

// Define the animation loop
function animate() {
    window.requestAnimationFrame(animate)
    ctx?.clearRect(0, 0, 1024, 512)
    enemy.update(ctx, 512)
    player.update(ctx, 512)
}

// Start the animation loop
animate()

// Handle keyboard input
window.addEventListener('keydown', (e) => {
    if (e.key === 'w') {
        player.jump()
    } else if (e.key === 'a') {
        player.velocity.x = -5
    } else if (e.key === 'd') {
        player.velocity.x = 5
    }
})

window.addEventListener('keyup', (e) => {
    if (e.key === 'a' || e.key === 'd') {
        player.velocity.x = 0
    }
})