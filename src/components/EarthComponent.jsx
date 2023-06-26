import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { styles } from '../styles';
import { stars_bg } from '../assets';

const EarthComponent = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      90,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    //renderer.dispose();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    renderer.setClearColor(0x000000, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(-5, 3, 5);
    scene.add(directionalLight);

    // Create a point light for shadowing the dot
    const dotLight = new THREE.PointLight(0xffffff, 1);
    dotLight.castShadow = true;
    scene.add(dotLight);

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(
      'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'
    );

    const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
    const earthMaterial = new THREE.MeshPhongMaterial({ map: earthTexture });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);

    const initialColorHelsinki = 0x86EFAC;

    const dotGeometry = new THREE.SphereGeometry(0.025, 16, 16);
    const dotMaterialHelsinki = new THREE.MeshStandardMaterial({
      color: initialColorHelsinki,
      roughness: 0.7,
      metalness: 0.2,
    });

    const dotMesh2 = new THREE.Mesh(dotGeometry, dotMaterialHelsinki);
    const helsinkiLatitude = 60.7128;
    const helsinkiLongitude = -205.0060;
    const helsinkiPosition = calculatePositionOnSphere(helsinkiLatitude, helsinkiLongitude);
    dotMesh2.position.copy(helsinkiPosition);
    earthMesh.add(dotMesh2);

    // Set the position and target of the dot light
    dotLight.position.copy(dotMesh2.position);
    dotLight.target = earthMesh;

    // Set up shadow properties for the dot light
    dotLight.shadow.mapSize.width = 512;
    dotLight.shadow.mapSize.height = 512;
    dotLight.shadow.camera.near = 0.5;
    dotLight.shadow.camera.far = 500;

    const darkenedColorHelsinki = 0x32B496; // Dark yellow

    // Create a starry background
    const starryTexture = new THREE.TextureLoader().load(stars_bg);
    starryTexture.encoding = THREE.sRGBEncoding;
    const starryMaterial = new THREE.MeshBasicMaterial({
      map: starryTexture,
      side: THREE.BackSide // Render the cube on the inside
    });
    const starryGeometry = new THREE.BoxGeometry(10, 8, 8);
    const starryCube = new THREE.Mesh(starryGeometry, starryMaterial);
    scene.add(starryCube);

    function toggleDotColors() {
      if (dotMaterialHelsinki.color.getHex() === initialColorHelsinki) {
        dotMaterialHelsinki.color.setHex(darkenedColorHelsinki);
      } else {
        dotMaterialHelsinki.color.setHex(initialColorHelsinki);
      }
    }

    setInterval(toggleDotColors, 900);

    // Set the starting latitude and longitude for Europe
    const startLatitude = 48.8566;
    const startLongitude = 100.3522;

    // Calculate the position on the sphere for the starting latitude and longitude
    const startPosition = calculatePositionOnSphere(startLatitude, startLongitude);

    // Set the initial rotation of the Earth mesh to start from Europe
    earthMesh.rotation.y = Math.atan2(startPosition.x, startPosition.z);
    earthMesh.rotation.x = Math.atan2(10, 20);

    // Variables for mouse interaction
    let isMouseDown = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    // Add event listeners
    document.addEventListener('mousedown', function (event) {
      isMouseDown = true;
      prevMouseX = event.clientX;
      prevMouseY = event.clientY;
    });

    document.addEventListener('mouseup', function () {
      isMouseDown = false;
    });

    document.addEventListener('mousemove', function (event) {
      if (isMouseDown) {
        const mouseDeltaX = event.clientX - prevMouseX;
        const mouseDeltaY = event.clientY - prevMouseY;
        earthMesh.rotation.y += mouseDeltaX * 0.01;
        earthMesh.rotation.x += mouseDeltaY * 0.01;
        prevMouseX = event.clientX;
        prevMouseY = event.clientY;
      }
    });

    camera.position.z = 4;

    const animate = () => {
      requestAnimationFrame(animate);
      earthMesh.rotation.y += 0.005;
      starryCube.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    function calculatePositionOnSphere(latitude, longitude) {
      const phi = THREE.MathUtils.degToRad(90 - latitude);
      const theta = THREE.MathUtils.degToRad(longitude + 180);
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.cos(phi);
      const z = Math.sin(phi) * Math.sin(theta);
      return new THREE.Vector3(x, y, z);
    }

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <section className='relative w-full h-screen mx-auto shadow-xl shadow-blue-500/50 cursor-default'>
  <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}>
    <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-5 h-5 rounded-full bg-[#915eff]' />
      <div className='w-1 sm:h-80 h-40 violet-gradient' />
    </div>
    <div>
      <h1 className={`${styles.heroHeadText} text-white select-none pb-4`}>
        Hi, I'm&nbsp;
        <span className='text-[#915eff]'>
          Edwin
        </span>
      </h1>
      <p className={`${styles.heroSubText} mt-2 select-none`}>I am a software developer at Tietoevry</p>
      <p className={`${styles.heroSubText} mt-2 select-none`}>Passionate about creating innovative solutions</p>
      <p className={`${styles.heroSubText} mt-2 select-none text-green-300`}>Currently living in Finland</p>
    </div>
  </div>
  <div className='relative h-screen w-full' style={{ overflow: 'hidden' }}> 
    <div ref={containerRef} style={{ width: '100%', height: '140%'}} />
  </div>
</section>
};

export default EarthComponent;
