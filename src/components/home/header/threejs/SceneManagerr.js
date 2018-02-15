import * as THREE from 'three'
import SceneSubject from "./SceneSubject"

export default canvas => {

    const clock = new THREE.Clock();
    const origin = new THREE.Vector3(0,0,0);

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const mousePosition = {
        x: 0,
        y: 0
    }

    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const ligth = buildLights(scene);
    
    const sceneSubjects = [];
    sceneSubjects.push(new SceneSubject(scene));

    function buildScene() {
        const scene = new THREE.Scene();
        return scene;
    }

    function buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        renderer.gammaInput = true;
        renderer.gammaOutput = true; 

        return renderer;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fieldOfView = 60;
        const nearPlane = 4;
        const farPlane = 100; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        camera.position.z = 40;

        return camera;
    }

    function buildLights(scene) {
        const lightIn = new THREE.PointLight("#4CAF50", 30);
        const lightOut = new THREE.PointLight("#2196F3", 10);
        lightOut.position.set(40,20,40);

        scene.add(lightIn);
        scene.add(lightOut);

        return lightOut;
    }

    function update() {
        const time = clock.getElapsedTime();

        updateCameraPositionRelativeToMouse();
        moveLight(time);

        for(let i=0; i<sceneSubjects.length; i++)
            sceneSubjects[i].update(time);

        renderer.render(scene, camera);
    }

    function updateCameraPositionRelativeToMouse() {
        camera.position.x += (  (mousePosition.x * 0.01) - camera.position.x ) * 0.01;
        camera.position.y += ( -(mousePosition.y * 0.01) - camera.position.y ) * 0.01;
        camera.lookAt(origin);
    }

    function moveLight(time) {
        const rad = 80;
        const x = rad * Math.sin(time*0.2)
        ligth.position.x = x;
    }

    function onWindowResize() {
        const { width, height } = canvas;
        
        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    }

    function onMouseMove(x, y) {
        mousePosition.x = x;
        mousePosition.y = y;
    }

    return {
        update,
        onWindowResize,
        onMouseMove
    }
}