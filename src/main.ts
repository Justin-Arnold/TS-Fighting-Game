import './assets/css/tailwind.css'
import GameInstance from './core/GameInstance'
import Ninja from './entities/Ninja'
import Samurai from './entities/Samurai'


const game = new GameInstance()

const enemy = new Samurai({
    startingPosition: { x: 800, y: 300 },
    keyBinds: {
        jump: 'ArrowUp',
        left: 'ArrowLeft',
        right: 'ArrowRight',
        basicAttack: 'Enter'
    }
}, game.canvasContext)

const player = new Ninja({
    startingPosition: { x: 200, y: 300 },
    keyBinds: {
        jump: 'w',
        left: 'a',
        right: 'd',
        basicAttack: ' '
    }
}, game.canvasContext)


game.registerPlayer(player, 1)
game.registerPlayer(enemy, 2)

