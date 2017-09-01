import SceneManager from "./sceneManager"

export default container => {
    container.onresize = resizeCanvas;

    var canvas = document.createElement('canvas');     
    container.appendChild(canvas);

    resizeCanvas();

    var sceneManager = new SceneManager(canvas);

    render();

    function render(time) {
        requestAnimationFrame(render);
        sceneManager.update();
    }

    function resizeCanvas() {
        canvas.style.width = container.innerWidth + "px";
        canvas.style.height = container.innerHeight + "px";

        if(sceneManager)
            sceneManager.onWindowResize();
    }
}