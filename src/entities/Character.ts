import BaseEntity from "./BaseEntity";

/** A Character represents a playable character in the game. */
export default class Character extends BaseEntity {

    protected jumpHeight: number = 5

    constructor(
        public canvasContext: CanvasRenderingContext2D,
        public position: BaseEntity['position'],
    ) {
        super(canvasContext, position)
        this.height = 150
        this.width = 50
    }

    public jump() {
        this.isOnGround()
            ? this.velocity.y = -this.jumpHeight
            : null
    }
}