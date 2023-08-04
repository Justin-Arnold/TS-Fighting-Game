import Character from "./Character";

export default class Ninja extends Character {

    constructor(
        public position: { x: number; y: number },
        public canvasContext: CanvasRenderingContext2D,
    ) {
        super(canvasContext, position)
        this.color = 'darkred'
    }
}