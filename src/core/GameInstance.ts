import PlayableCharacter from "../entities/PlayableCharacter.ts"

export default class GameInstance {

    public canvasContext: CanvasRenderingContext2D
    private updateCallbacks: (() => void)[] = []
    private registeredPlayers: {
        character: PlayableCharacter,
        playerNumber: 1 | 2
    }[] = []

    constructor() {
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
            <div class="h-screen w-screen bg-black grid place-items-center overflow-hidden py-8">
                <canvas id="canvas" height="512" width="1024" class="bg-white"></canvas>
            </div>
        `

        const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!
        this.canvasContext = canvas.getContext('2d')!

        this.animationLoop()
    }


    animationLoop() {
        window.requestAnimationFrame(() => {
            this.animationLoop()
            this.canvasContext.clearRect(0, 0, 1024, 512)
            this.registeredPlayers.forEach(player => {
                player.character.update()

                const otherPlayerCharacters = this.registeredPlayers
                    .filter(otherPlayer => otherPlayer.playerNumber !== player.playerNumber)
                    .map(otherPlayer => otherPlayer.character)
                player.character.checkAttackCollision(otherPlayerCharacters)
            })
            this.updateCallbacks.forEach(callback => callback())
        })
    }

    onUpdate(callback: () => void) {
        this.updateCallbacks.push(callback)
    }

    registerPlayer(player: PlayableCharacter, playerNumber: 1 | 2) {
        this.registeredPlayers.push({
            character: player,
            playerNumber
        })
    }
}