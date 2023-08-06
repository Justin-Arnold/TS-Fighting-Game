import Character, { type CharacterActions, type SupportedKeyboardKeys } from "./Character";

export default class Ninja extends Character {

    private keysDown: Set<SupportedKeyboardKeys> = new Set()

    constructor(
        public config: {
            startingPosition: Character['position'],
            keyBinds: CharacterActions,
        },
        canvasContext: Character['canvasContext'],
    ) {
        super(canvasContext, config.startingPosition, 140, 50, 'darkblue');
        this.jumpHeight = 10
        this.moveSpeed = 10

        window.addEventListener('keydown', (e) => {
            this.keysDown.add(e.key as SupportedKeyboardKeys)
        })

        window.addEventListener('keyup', (e) => {
            this.keysDown.delete(e.key as SupportedKeyboardKeys)
        })
    }

    update() {
        super.update()

        if (this.keysDown.has(this.config.keyBinds.jump)) {
            this.jump();
        }
        if (this.keysDown.has(this.config.keyBinds.left)) {
            this.moveLeft();
        }
        if (this.keysDown.has(this.config.keyBinds.right)) {
            this.moveRight();
        }

        if (!this.keysDown.has(this.config.keyBinds.left) && !this.keysDown.has(this.config.keyBinds.right)) {
            this.stopMoving()
        }
    }
}