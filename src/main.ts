import './assets/css/tailwind.css'
import GameInstance from './core/GameInstance'
import Ninja from './entities/Ninja'
import Samurai from './entities/Samurai'


const game = new GameInstance()


// Define the player and enemy
const enemy = new Samurai({
    startingPosition: { x: 800, y: 300 },
    keyBinds: {
        jump: 'ArrowUp',
        left: 'ArrowLeft',
        right: 'ArrowRight',
    }
}, game.canvasContext)

const player = new Ninja({
    startingPosition: { x: 200, y: 300 },
    keyBinds: {
        jump: 'w',
        left: 'a',
        right: 'd',
    }
}, game.canvasContext)

// Define the animation loop
function animate() {
    window.requestAnimationFrame(animate)
    game.canvasContext.clearRect(0, 0, 1024, 512)
    enemy.update()
    player.update()
}

// Start the animation loop
animate()