import PlayableCharacter from "./PlayableCharacter";

export default class Samurai extends PlayableCharacter {

    constructor(
        public config: {
            startingPosition: PlayableCharacter['position'],
            keyBinds: PlayableCharacter['keyBinds'],
        },
        canvasContext: PlayableCharacter['canvasContext'],
    ) {
        super(canvasContext, config.startingPosition, 150, 50, 'darkred', config.keyBinds);
        this.moveSpeed = 6
    }
}