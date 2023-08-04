export class CharacterEntity {
    position: { x: number; y: number }
    velocity: { x: number; y: number }
    height: number
    constructor(
        position: { x: number; y: number }) {
        this.position = position
        this.velocity = { x: 0, y: 10 }
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
            this.velocity.y += .6
        }
    }
}

export class CharacterClass extends CharacterEntity {
    constructor(
        position: { x: number; y: number },
        public jumpHeight = 5
    ) {
        super(position)
    }

    jump() {
        if (this.velocity.y === 0) {
            this.velocity.y = -this.jumpHeight
        }
    }
}

export class Ninja extends CharacterClass {
    private classJumpHeight = 8
    constructor(
        position: { x: number; y: number },
    ) {
        super(position)
        this.jumpHeight = this.classJumpHeight
        this.height = 140
    }
    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'darkgray'
        ctx.fillRect(this.position.x, this.position.y, 50, this.height)
    }
}

export class Samurai extends CharacterClass {
    constructor(
        position: { x: number; y: number }) {
        super(position,)
    }
    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, 50, this.height)
    }
}

// TODO - Wizard Class

// TODO - Gunner Class