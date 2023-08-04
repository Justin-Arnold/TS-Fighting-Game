import type { Vector } from './../types.ts'



/** A BaseEntity represents a generic entity in the game that can exist in 2D space and optionally move. */
export default class BaseEntity {

    private _gravity: number = 0.6
    public velocity: Vector = { x: 0, y: 0 }
    protected height: number = 0
    protected width: number = 0
    protected color: string = 'black'

    constructor(
        public canvasContext: CanvasRenderingContext2D,
        public position: Vector,
    ) { }

    protected draw() {
        this.canvasContext.fillStyle = this.color
        this.canvasContext.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    public update() {
        this.draw()
        this.move()
        this.isOnGround()
            ? this.stayStill()
            : this.fall()
    }
    protected stayStill() {
        this.velocity.y = 0
    }
    protected fall() {
        this.velocity.y += this._gravity
    }
    protected move() {
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
    }
    protected isOnGround() {
        return this.position.y + this.height + this.velocity.y >= this.canvasContext.canvas.height
    }
}