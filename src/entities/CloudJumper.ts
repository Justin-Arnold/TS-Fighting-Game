import PlayableCharacter from "./PlayableCharacter";

export default class Ninja extends PlayableCharacter {

    constructor(
        config: {
            startingPosition: PlayableCharacter['position'],
            keyBinds: PlayableCharacter['keyBinds'],
        },
        canvasContext: PlayableCharacter['canvasContext'],
    ) {
        super(canvasContext, config.startingPosition, 150, 45, 'lightblue', config.keyBinds);
        this.jumpHeight = 15
        this.moveSpeed = 8
        this._gravity = 0.5
    }


}