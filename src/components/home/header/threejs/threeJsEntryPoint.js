import SceneManager from "./sceneManager"

export default container => {
    window.onresize = resizeCanvas;

    const canvas = createCanvas(document, container);
    const sceneManager = new SceneManager(canvas, container);

    resizeCanvas();
    render();

    function createCanvas(document, container) {
        const canvas = document.createElement('canvas');     
        container.appendChild(canvas);
        return canvas;
    }

    function resizeCanvas() {        
        canvas.style.width = '100%';
        canvas.style.height= '100%';
        
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        sceneManager.onWindowResize()
    }

    function render(time) {
        requestAnimationFrame(render);
        sceneManager.update();
    }
}