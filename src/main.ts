import './tailwind.css'
import Sprite from './sprite'

// Create the canvas and append it to the DOM
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="h-screen w-screen bg-black grid place-items-center overflow-hidden py-8">
        <canvas id="canvas" height="512" width="1024" class="bg-white"></canvas>
    </div>
`

// Get the canvas and its context
const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!
const ctx = canvas.getContext('2d')!

// define the animate function

const player = new Sprite({ x: 0, y: -150 }, { x: 0, y: 10 })
const enemy = new Sprite({ x: 100, y: -150 }, { x: 0, y: 10 })


function animate() {
    window.requestAnimationFrame(animate)
    ctx?.clearRect(0, 0, 1024, 568)
    player.update(ctx, 512)
    enemy.update(ctx, 512)
}

animate()
