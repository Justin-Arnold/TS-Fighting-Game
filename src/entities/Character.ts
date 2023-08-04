import BaseEntity from "./BaseEntity";

/** A Character represents a playable character in the game. */
export default class Character extends BaseEntity {

    protected jumpHeight: number = 5

    constructor(
        canvasContext: BaseEntity['canvasContext'],
        position: BaseEntity['position'],
        height: BaseEntity['height'],
        width: BaseEntity['width'],
        color: BaseEntity['color'],
    ) {
        super(canvasContext, position, height, width, color);
    }

    public jump() {
        this.isOnGround()
            ? this.velocity.y = -this.jumpHeight
            : null
    }

    public moveLeft() {
        this.isAtEdgeOfScreen('left')
            ? null
            : this.velocity.x = -5
    }

    public moveRight() {
        this.isAtEdgeOfScreen('right')
            ? null
            : this.velocity.x = 5
    }

    private isAtEdgeOfScreen(direction: 'left' | 'right') {
        return direction === 'left'
            ? this.position.x <= 0
            : this.position.x + this.width >= this.canvasContext.canvas.width
    }
}