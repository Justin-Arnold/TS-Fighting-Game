import BaseEntity from "./BaseEntity";

export type SupportedKeyboardKeys =
    | 'Enter'
    | 'Shift'
    | 'Control'
    | 'Alt'
    | 'Space'
    | 'ArrowLeft'
    | 'ArrowUp'
    | 'ArrowRight'
    | 'ArrowDown'
    | 'PrintScreen'
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | 'a'
    | 'b'
    | 'c'
    | 'd'
    | 'e'
    | 'f'
    | 'g'
    | 'h'
    | 'i'
    | 'j'
    | 'k'
    | 'l'
    | 'm'
    | 'n'
    | 'o'
    | 'p'
    | 'q'
    | 'r'
    | 's'
    | 't'
    | 'u'
    | 'v'
    | 'w'
    | 'x'
    | 'y'
    | 'z'

export type CharacterActions = {
    jump: SupportedKeyboardKeys
    left: SupportedKeyboardKeys
    right: SupportedKeyboardKeys
}

/** A Character represents a playable character in the game. */
export default class extends BaseEntity {

    protected jumpHeight: number = 5
    protected moveSpeed: number = 5
    private keysDown: Set<SupportedKeyboardKeys> = new Set()


    constructor(
        canvasContext: BaseEntity['canvasContext'],
        position: BaseEntity['position'],
        height: BaseEntity['height'],
        width: BaseEntity['width'],
        color: BaseEntity['color'],
        protected keyBinds: CharacterActions
    ) {
        super(canvasContext, position, height, width, color);

        window.addEventListener('keydown', (e) => {
            this.keysDown.add(e.key as SupportedKeyboardKeys)
        })

        window.addEventListener('keyup', (e) => {
            this.keysDown.delete(e.key as SupportedKeyboardKeys)
        })
    }

    public jump() {
        this.isOnGround()
            ? this.velocity.y = -this.jumpHeight
            : null
    }

    public moveLeft() {
        this.isAtEdgeOfScreen('left')
            ? null
            : this.velocity.x = -this.moveSpeed
    }

    public moveRight() {
        this.isAtEdgeOfScreen('right')
            ? null
            : this.velocity.x = this.moveSpeed
    }

    protected stopMoving() {
        this.velocity.x = 0
    }

    private isAtEdgeOfScreen(direction: 'left' | 'right') {
        return direction === 'left'
            ? this.position.x <= 0
            : this.position.x + this.width >= this.canvasContext.canvas.width
    }

    update() {
        super.update()

        this.stopMoving()

        if (this.keysDown.has(this.keyBinds.jump)) {
            this.jump();
        }
        if (this.keysDown.has(this.keyBinds.left)) {
            this.moveLeft();
        }
        if (this.keysDown.has(this.keyBinds.right)) {
            this.moveRight();
        }
    }
}