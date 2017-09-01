import * as THREE from 'three'

export default scene => {    
    var group = new THREE.Group();

    var pyramidGeometry = new THREE.IcosahedronGeometry(10, 3);
    var material = new THREE.MeshStandardMaterial({ color: "#000", roughness: 1, metalness: .8, shading: THREE.SmoothShading });
        
    var top = new THREE.Mesh(pyramidGeometry, material);
    top.position.y = 0;
    group.add(top);
        
    var wireframe = new THREE.LineSegments(
        new THREE.EdgesGeometry(pyramidGeometry),
        new THREE.LineBasicMaterial()
    );

    group.add(wireframe);

    scene.add(group);

    var speed = 0.01;

    function update(time) {
        group.rotation.y = time * speed;    
        wireframe.material.color.setHSL( Math.sin(time * speed), 0.5, 0.5 );
    }

    return {
        update
    }
}