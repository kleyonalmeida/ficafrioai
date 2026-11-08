import {
  ACESFilmicToneMapping, Box3, DirectionalLight, Group, HemisphereLight, OrthographicCamera,
  Scene, Vector3, WebGLRenderer,
} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export async function mountColdModel(canvas, url) {
  const frame = canvas.parentElement;
  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.toneMapping = ACESFilmicToneMapping;
  const scene = new Scene();
  const camera = new OrthographicCamera(-0.65, 0.65, 0.4, -0.4, 0.1, 10);
  camera.position.z = 2;

  const sky = new HemisphereLight(0xe8f8ff, 0x506c89, 2.15);
  const key = new DirectionalLight(0xffffff, 2.1);
  key.position.set(-1, 2, 2);
  const rim = new DirectionalLight(0x64d9ff, 1.35);
  rim.position.set(1, -0.65, 0.6);
  scene.add(sky, key, rim);

  const pivot = new Group();
  scene.add(pivot);

  let model;
  try {
    ({ scene: model } = await new GLTFLoader().loadAsync(url));
  } catch (error) {
    renderer.dispose();
    throw error;
  }

  const bounds = new Box3().setFromObject(model);
  const center = bounds.getCenter(new Vector3());
  model.position.sub(center);
  pivot.add(model);

  const flap = model.getObjectByName('AletaMovel');
  const display = [];
  const displayMaterials = new Set();
  model.traverse((object) => {
    if (object.isMesh && object.material.name === 'Display branco luminoso') {
      display.push(object);
      displayMaterials.add(object.material);
    }
  });

  function render() {
    renderer.render(scene, camera);
  }

  function resize() {
    const { width, height } = frame.getBoundingClientRect();
    if (!width || !height) return;

    const aspect = width / height;
    const halfWidth = Math.max(0.61, aspect * 0.26);
    camera.left = -halfWidth;
    camera.right = halfWidth;
    camera.top = halfWidth / aspect;
    camera.bottom = -camera.top;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(width, height, false);
    render();
  }

  const observer = new ResizeObserver(resize);
  observer.observe(frame);
  resize();

  function setPose(turn, power, opening) {
    if (flap) flap.rotation.x = opening * 0.91;
    pivot.rotation.set(0.09 + turn * 0.13, turn * 0.43, turn * 0.05);
    for (const segment of display) segment.visible = power > 0.03;
    for (const material of displayMaterials) material.emissiveIntensity = power * 2.6;
    render();
  }

  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    observer.disconnect();
    delete frame.dataset.modelReady;
  }, { once: true });

  return { setPose };
}

