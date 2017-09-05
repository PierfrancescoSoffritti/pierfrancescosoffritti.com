import * as THREE from 'three'
import alphaTexture from '../../../../assets/textures/stripes_gradient.png';

export default scene => {    
    const group = new THREE.Group();

    const ballGeometry = new THREE.IcosahedronGeometry(10, 2);
    for (var i=0; i<ballGeometry.vertices.length; i+=2) {
    	var scalar = 1 + Math.random()*0.8;
    	ballGeometry.vertices[i].multiplyScalar(scalar)
    }
    
    var material = new THREE.MeshStandardMaterial({ color: "#000", transparent: true, side: THREE.DoubleSide, alphaTest: 0.5 });
    var alphaMap = new THREE.TextureLoader().load(alphaTexture);
    material.alphaMap = alphaMap;
    material.alphaMap.magFilter = THREE.NearestFilter;
    material.alphaMap.wrapT = THREE.RepeatWrapping;
    material.alphaMap.repeat.y = 1;

    const ballMesh = new THREE.Mesh(ballGeometry, material);

    group.add(ballMesh);
        
    const wireframe = new THREE.LineSegments(
        new THREE.EdgesGeometry(ballGeometry),
        new THREE.LineBasicMaterial()
    );

    wireframe.scale.set(1.1, 1.1, 1.1)

    group.add(wireframe);

    scene.add(group);

    group.rotation.z = Math.PI/4;

    const speed = 0.02;

    function update(time) {
        material.alphaMap.offset.y = time*0.06;

        group.rotation.y = time * speed;    
        wireframe.material.color.setHSL( Math.sin(time * speed), 0.5, 0.5 );

        const scale = (Math.sin(time*speed*8)+6.4)/5;
        wireframe.scale.set(scale, scale, scale)
    }

    return {
        update
    }
}