import * as THREE from 'three'
import TestSubject from "./TestSubject"

export default canvas => {
	canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight/2;

    var width = canvas.width;
    var height = canvas.height;

    var clock = new THREE.Clock();
  
    // scene setup
    var scene = new THREE.Scene();
    scene.background = new THREE.Color("#fff");
    scene.fog = new THREE.Fog( "#990099", 1, 4000 )

    var renderer = buildRender(width, height);
    var camera = buildCamera(width, height);
    var light = buildLights(scene);
    
    var sceneSubjects = [];
    sceneSubjects.push(new TestSubject(scene));

    function buildRender(width, height) {
        var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
        var DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        renderer.gammaInput = true;
        renderer.gammaOutput = true; 

        return renderer;
    }

    function buildCamera(width, height) {
        var aspectRatio = width / height;
        var fieldOfView = 60;
        var nearPlane = 5;
        var farPlane = 1000; 
        var camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        camera.position.z = 40;

        return camera;
    }

    function buildLights(scene) {
        var light = new THREE.SpotLight("#2222ff", 1);
        light.position.y = 70;
        light.position.z = 0;
        light.position.x = -140;

        light.decacy = 2;
        light.penumbra = 1;
        scene.add(light);

        return light;
    }

    function update() {

        for(var i=0; i<sceneSubjects.length; i++)
        	sceneSubjects[i].update(clock.getElapsedTime());

        renderer.render(scene, camera);
    }

    function onWindowResize() {
        width = document.body.clientWidth;
        height = document.body.clientHeight;
        canvas.width = width;
        canvas.height = height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    }

    return {
        update,
        onWindowResize
    }
}