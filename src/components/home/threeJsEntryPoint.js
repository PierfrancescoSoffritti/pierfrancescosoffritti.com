import SceneManager from "./sceneManager"

export default container => {
    window.onresize = resizeCanvas;

    const canvas = document.createElement('canvas');     
    container.appendChild(canvas);

    const sceneManager = new SceneManager(canvas, container);

    resizeCanvas();

    render();

    function render(time) {
        requestAnimationFrame(render);
        sceneManager.update();
    }

    function resizeCanvas() {

        // Make it visually fill the positioned parent
        canvas.style.width ='100%';
        canvas.style.height='100%';
        
        // ...then set the internal size to match
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        sceneManager.onWindowResize()
    }
}