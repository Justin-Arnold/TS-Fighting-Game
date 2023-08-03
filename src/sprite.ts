export default class Sprite {
    position: { x: number; y: number }
    velocity: { x: number; y: number }
    height: number
    constructor(
        position: { x: number; y: number }, velocity: { x: number; y: number }) {
        this.position = position
        this.velocity = velocity
        this.height = 150
    }
    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, 50, this.height)
    }

    update(ctx: CanvasRenderingContext2D, canvasHeight: number) {
        this.draw(ctx)
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.height + this.velocity.y >= canvasHeight) {
            this.velocity.y = 0
        } else {
            this.velocity.y += 0.2
        }

    }
}