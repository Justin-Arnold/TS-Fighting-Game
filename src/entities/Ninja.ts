import PlayableCharacter from "./PlayableCharacter";

export default class Ninja extends PlayableCharacter {

    constructor(
        config: {
            startingPosition: PlayableCharacter['position'],
            keyBinds: PlayableCharacter['keyBinds'],
        },
        canvasContext: PlayableCharacter['canvasContext'],
    ) {
        super(canvasContext, config.startingPosition, 140, 50, 'darkblue', config.keyBinds);
        this.jumpHeight = 10
        this.moveSpeed = 10
    }


}