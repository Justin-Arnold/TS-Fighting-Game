import './tailwind.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="h-screen w-screen bg-black grid place-items-center overflow-hidden py-8">
        <canvas id="canvas" height="512" width="1024" class="bg-white"></canvas>
    </div>
`
