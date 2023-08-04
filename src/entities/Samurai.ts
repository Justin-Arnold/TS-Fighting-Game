import Character from "./Character";

export default class Ninja extends Character {

    constructor(
        position: Character['position'],
        canvasContext: Character['canvasContext'],
    ) {
        super(canvasContext, position, 150, 50, 'darkred');
    }
}