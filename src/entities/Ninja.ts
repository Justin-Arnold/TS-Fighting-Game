import Character from "./Character";

export default class Ninja extends Character {

    constructor(
        position: Character['position'],
        canvasContext: Character['canvasContext'],
    ) {
        super(canvasContext, position, 140, 50, 'darkblue');
        this.jumpHeight = 10;
    }
}