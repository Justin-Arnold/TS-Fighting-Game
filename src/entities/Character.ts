import BaseEntity from "./BaseEntity";

/** A Character represents a playable character in the game. */
export default class Character extends BaseEntity {

    protected jumpHeight: number = 5

    constructor(
        canvasContext: CanvasRenderingContext2D,
        position: BaseEntity['position'],
        height: number,
        width: number,
        color: string
    ) {
        super(canvasContext, position, height, width, color);
    }

    public jump() {
        this.isOnGround()
            ? this.velocity.y = -this.jumpHeight
            : null
    }
}