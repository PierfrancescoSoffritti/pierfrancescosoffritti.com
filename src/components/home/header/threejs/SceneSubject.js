import * as THREE from 'three'
import alphaTexture from '../../../../assets/textures/stripes_gradient.jpg';

export default scene => {    
    const group = new THREE.Group();

    const subjectGeometry = deformGeometry(new THREE.IcosahedronGeometry(10, 2));
    
    const subjectMaterial = new THREE.MeshStandardMaterial({ color: "#000", transparent: true, side: THREE.DoubleSide, alphaTest: 0.5 });
    subjectMaterial.alphaMap = new THREE.TextureLoader().load(alphaTexture);
    subjectMaterial.alphaMap.magFilter = THREE.NearestFilter;
    subjectMaterial.alphaMap.wrapT = THREE.RepeatWrapping;
    subjectMaterial.alphaMap.repeat.y = 1;

    const subjectMesh = new THREE.Mesh(subjectGeometry, subjectMaterial);
        
    const subjectWireframe = new THREE.LineSegments(
        new THREE.EdgesGeometry(subjectGeometry),
        new THREE.LineBasicMaterial()
    );

    group.add(subjectMesh);
    group.add(subjectWireframe);
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

        subjectMaterial.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed;

        subjectWireframe.material.color.setHSL( Math.sin(angle*2), 0.5, 0.5 );
        
        const scale = (Math.sin(angle*8)+6.4)/5;
        subjectWireframe.scale.set(scale, scale, scale)
    }

    return {
        update
    }
}