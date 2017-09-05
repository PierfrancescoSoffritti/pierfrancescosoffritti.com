import * as THREE from 'three'
import alphaTexture from '../../../../assets/textures/stripes_gradient.png';

export default scene => {    
    const group = new THREE.Group();

    const ballGeometry = deformGeometry(new THREE.IcosahedronGeometry(10, 2));
    
    const material = new THREE.MeshStandardMaterial({ color: "#000", transparent: true, side: THREE.DoubleSide, alphaTest: 0.5 });
    const alphaMap = new THREE.TextureLoader().load(alphaTexture);
    material.alphaMap = alphaMap;
    material.alphaMap.magFilter = THREE.NearestFilter;
    material.alphaMap.wrapT = THREE.RepeatWrapping;
    material.alphaMap.repeat.y = 1;

    const ballMesh = new THREE.Mesh(ballGeometry, material);
        
    const wireframe = new THREE.LineSegments(
        new THREE.EdgesGeometry(ballGeometry),
        new THREE.LineBasicMaterial()
    );

    group.add(ballMesh);
    group.add(wireframe);
    scene.add(group);

    group.rotation.z = Math.PI/4;

    const speed = 0.02;
    const textureOffsetSpeed = 0.02;

    function deformGeometry(geometry) {
        for (let i=0; i<geometry.vertices.length; i+=2) {
            const scalar = 1 + Math.random()*0.8;
            geometry.vertices[i].multiplyScalar(scalar)
        }

        return geometry;
    }

    function update(time) {
        const angle = time*speed;

        group.rotation.y = angle;

        material.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed;

        wireframe.material.color.setHSL( Math.sin(angle*2), 0.5, 0.5 );
        
        const scale = (Math.sin(angle*8)+6.4)/5;
        wireframe.scale.set(scale, scale, scale)
    }

    return {
        update
    }
}