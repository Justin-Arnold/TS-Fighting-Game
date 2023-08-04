import Character from "./Character";

export default class Ninja extends Character {

    constructor(
        position: { x: number; y: number },
        canvasContext: CanvasRenderingContext2D,
    ) {
        super(canvasContext, position, 140, 50, 'darkblue');
        this.jumpHeight = 10;
    }
}