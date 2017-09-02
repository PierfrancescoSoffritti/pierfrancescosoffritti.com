import * as THREE from 'three'

export default scene => {    
    const group = new THREE.Group();

    const ballGeometry = new THREE.IcosahedronGeometry(10, 3);
    const material = new THREE.MeshStandardMaterial({ color: "#000", roughness: 1, metalness: .8 });        
    const ballMesh = new THREE.Mesh(ballGeometry, material);

    group.add(ballMesh);
        
    const wireframe = new THREE.LineSegments(
        new THREE.EdgesGeometry(ballGeometry),
        new THREE.LineBasicMaterial()
    );

    wireframe.scale.set(1.1, 1.1, 1.1)

    group.add(wireframe);

    scene.add(group);

    const speed = 0.02;

    function update(time) {
        group.rotation.y = time * speed;    
        wireframe.material.color.setHSL( Math.sin(time * speed), 0.5, 0.5 );
    }

    return {
        update
    }
}