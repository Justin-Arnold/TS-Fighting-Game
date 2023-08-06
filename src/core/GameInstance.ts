export default class GameInstance {

    public canvasContext: CanvasRenderingContext2D

    constructor() {
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
            <div class="h-screen w-screen bg-black grid place-items-center overflow-hidden py-8">
                <canvas id="canvas" height="512" width="1024" class="bg-white"></canvas>
            </div>
        `

        const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!
        this.canvasContext = canvas.getContext('2d')!
    }
}