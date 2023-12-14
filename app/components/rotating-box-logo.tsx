'use client'
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import '../../public/k-logo.png'

const RotatingBox: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // let camera, scene, renderer;
			// let mesh;

            // const onWindowResize = () => {

			// 	camera.aspect = window.innerWidth / window.innerHeight;
			// 	camera.updateProjectionMatrix();

			// 	renderer.setSize( window.innerWidth, window.innerHeight );

			// }

			// const animate = () => {

			// 	requestAnimationFrame( animate );

			// 	mesh.rotation.x += 0.005;
			// 	mesh.rotation.y += 0.01;

			// 	renderer.render( scene, camera );

			// }

            // const init = () => {

			// 	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 100 );
			// 	camera.position.z = 2;

			// 	scene = new THREE.Scene();

			// 	const texture = new THREE.TextureLoader().load( require('../../public/k-logo.png') );
			// 	texture.colorSpace = THREE.SRGBColorSpace;

			// 	const geometry = new THREE.BoxGeometry();
			// 	const material = new THREE.MeshBasicMaterial( { map: texture } );

			// 	mesh = new THREE.Mesh( geometry, material );
			// 	scene.add( mesh );

			// 	renderer = new THREE.WebGLRenderer( { antialias: true } );
			// 	renderer.setPixelRatio( window.devicePixelRatio );
			// 	renderer.setSize( window.innerWidth, window.innerHeight );
			// 	document.body.appendChild( renderer.domElement );

			// 	//

			// 	window.addEventListener( 'resize', onWindowResize );

			// }
            // init()
        }
    }, []);
    return <div ref={containerRef} />;
};
export default RotatingBox;