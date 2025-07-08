import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Scene and Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);

// Renderer
const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({ canvas ,antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

//add 3D-model
const loader = new GLTFLoader();
loader.load('./pokemon_basic_pokeball.glb', function (gltf) {
  const model = gltf.scene;
  scene.add(model);
  render();
});

// HDRI Environment
const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

// Replace this URL with your own HDRI if needed
const hdriUrl = 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/lakeside_sunrise_4k.hdr';
new RGBELoader()
  .setDataType(THREE.FloatType)
  .load(hdriUrl, function (texture) {
    const envMap = pmremGenerator.fromEquirectangular(texture).texture;
    scene.environment = envMap;
    scene.background = envMap;
    texture.dispose();
    pmremGenerator.dispose();
    render();
  });

// Geometry and Material
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ metalness: 0.7, roughness: 0.1 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Responsive resize
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Animation loop
function render() {
  requestAnimationFrame(render);
  controls.update();
  renderer.render(scene, camera);
}
