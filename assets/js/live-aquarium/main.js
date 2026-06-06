// import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
// import WebGL from 'https://unpkg.com/three@0.160.0/examples/jsm/capabilities/WebGL.js';

import * as THREE from '../node_modules/three/src/Three.js';
import WebGL from '../node_modules/three/examples/jsm/capabilities/WebGL.js';

// ============================================================
// SCENE & RENDERER
// ============================================================
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000d1a);
scene.fog = new THREE.FogExp2(0x001428, 0.012);

const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.set(0, 6, 52);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ============================================================
// TANK DIMENSIONS
// ============================================================
const TANK = { w: 60, h: 30, d: 35 };

// ============================================================
// LIGHTING
// ============================================================
// Dim blue-tinted ambient — underwater mood
const ambientLight = new THREE.AmbientLight(0x0a1a3a, 4.0);
scene.add(ambientLight);

// Sunlight from above, slightly warm-blue (filtering through water surface)
const sunLight = new THREE.DirectionalLight(0x99ccff, 5.0);
sunLight.position.set(5, 60, 10);
sunLight.castShadow = true;
sunLight.shadow.mapSize.set(2048, 2048);
sunLight.shadow.camera.near = 1;
sunLight.shadow.camera.far = 200;
sunLight.shadow.camera.left = -40;
sunLight.shadow.camera.right = 40;
sunLight.shadow.camera.top = 35;
sunLight.shadow.camera.bottom = -35;
scene.add(sunLight);

// Dim back fill to soften shadows
const fillLight = new THREE.DirectionalLight(0x112255, 1.5);
fillLight.position.set(-15, -10, -25);
scene.add(fillLight);

// Caustic point lights — animate their position to mimic shimmering caustics
const causticLights = [];
for (let i = 0; i < 5; i++) {
  const light = new THREE.PointLight(0x55aaff, 2.5, 45);
  light.position.set(
    (Math.random() - 0.5) * TANK.w * 0.7,
    TANK.h / 2 - 1,
    (Math.random() - 0.5) * TANK.d * 0.7
  );
  scene.add(light);
  causticLights.push({
    light,
    phase: Math.random() * Math.PI * 2,
    speed: 0.25 + Math.random() * 0.4,
  });
}

// ============================================================
// AQUARIUM TANK
// ============================================================
function buildTank() {
  // Physically-based glass — very low opacity, high transmission
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xbbddff,
    transparent: true,
    opacity: 0.07,
    roughness: 0.0,
    metalness: 0.0,
    transmission: 0.97,
    thickness: 0.5,
    ior: 1.52,
    side: THREE.DoubleSide,
    depthWrite: false,
  });

  const half = { w: TANK.w / 2, h: TANK.h / 2, d: TANK.d / 2 };
  const t = 0.3;

  // Glass walls (no bottom, no top — open tank top handled by water surface)
  [
    [TANK.w, TANK.h, t,      0,       0,  half.d ], // front
    [TANK.w, TANK.h, t,      0,       0, -half.d ], // back
    [t,      TANK.h, TANK.d, -half.w, 0,  0      ], // left
    [t,      TANK.h, TANK.d,  half.w, 0,  0      ], // right
  ].forEach(([sw, sh, sd, px, py, pz]) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(sw, sh, sd), glassMat);
    mesh.position.set(px, py, pz);
    scene.add(mesh);
  });

  // Metal frame edges
  const edgeMat = new THREE.MeshStandardMaterial({
    color: 0x1a2535,
    roughness: 0.25,
    metalness: 0.9,
  });
  const e = 0.55;

  [
    // Vertical corners
    [e, TANK.h + e, e, -half.w, 0, -half.d],
    [e, TANK.h + e, e,  half.w, 0, -half.d],
    [e, TANK.h + e, e, -half.w, 0,  half.d],
    [e, TANK.h + e, e,  half.w, 0,  half.d],
    // Top ring
    [TANK.w + e, e, e, 0,  half.h, -half.d],
    [TANK.w + e, e, e, 0,  half.h,  half.d],
    [e, e, TANK.d + e, -half.w,  half.h, 0],
    [e, e, TANK.d + e,  half.w,  half.h, 0],
    // Bottom ring
    [TANK.w + e, e, e, 0, -half.h, -half.d],
    [TANK.w + e, e, e, 0, -half.h,  half.d],
    [e, e, TANK.d + e, -half.w, -half.h, 0],
    [e, e, TANK.d + e,  half.w, -half.h, 0],
  ].forEach(([sw, sh, sd, px, py, pz]) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(sw, sh, sd), edgeMat);
    mesh.position.set(px, py, pz);
    scene.add(mesh);
  });
}

buildTank();

// ============================================================
// SAND FLOOR  +  ROCKS
// ============================================================
function buildFloor() {
  const geo = new THREE.PlaneGeometry(TANK.w - 0.6, TANK.d - 0.6, 48, 48);

  // Gently displace verts for natural bumpy sand
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i); // local Y = world Z before rotation
    const bump =
      Math.sin(x * 0.35 + 1.1) * 0.18 +
      Math.sin(y * 0.55 + 2.3) * 0.12 +
      (Math.random() - 0.5) * 0.18;
    pos.setZ(i, bump);
  }
  geo.computeVertexNormals();

  const mat = new THREE.MeshStandardMaterial({
    color: 0xc4a46a,
    roughness: 1.0,
    metalness: 0.0,
  });

  const floor = new THREE.Mesh(geo, mat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -TANK.h / 2 + 0.05;
  floor.receiveShadow = true;
  scene.add(floor);

  buildRocks();
}

function buildRocks() {
  for (let i = 0; i < 16; i++) {
    const s = 0.5 + Math.random() * 2.2;
    const geo = new THREE.DodecahedronGeometry(s, 0);

    // Randomize vertex positions for a craggy, natural look
    const pos = geo.attributes.position;
    for (let j = 0; j < pos.count; j++) {
      pos.setX(j, pos.getX(j) * (0.55 + Math.random() * 0.9));
      pos.setY(j, pos.getY(j) * (0.4  + Math.random() * 0.55));
      pos.setZ(j, pos.getZ(j) * (0.55 + Math.random() * 0.9));
    }
    geo.computeVertexNormals();

    const hue = 0.27 + Math.random() * 0.08;
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color().setHSL(hue, 0.12, 0.22 + Math.random() * 0.22),
      roughness: 0.95,
      metalness: 0.0,
    });

    const rock = new THREE.Mesh(geo, mat);
    rock.position.set(
      (Math.random() - 0.5) * (TANK.w - 6),
      -TANK.h / 2 + s * 0.35,
      (Math.random() - 0.5) * (TANK.d - 5)
    );
    rock.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
    rock.castShadow = true;
    rock.receiveShadow = true;
    scene.add(rock);
  }
}

buildFloor();

// ============================================================
// WATER SURFACE  — custom GLSL shader
// ============================================================
const waterVert = /* glsl */`
  uniform float uTime;
  varying vec2  vUv;
  varying vec3  vWorldPos;
  varying vec3  vNormal;

  void main() {
    vUv = uv;
    vec3 p = position;

    // Multi-octave ripple displacement
    float r =  sin(p.x * 0.70 + uTime * 1.10) * 0.14
             + sin(p.z * 0.55 + uTime * 0.85) * 0.11
             + sin(p.x * 1.40 - p.z * 0.80 + uTime * 1.70) * 0.07
             + sin(p.z * 1.20 + p.x * 0.40 - uTime * 1.30) * 0.05;
    p.y += r;

    vec4 wp = modelMatrix * vec4(p, 1.0);
    vWorldPos = wp.xyz;

    // Analytic normal from ripple gradient
    float dx =  cos(p.x * 0.70 + uTime * 1.10) * 0.70 * 0.14
              + cos(p.x * 1.40 - p.z * 0.80 + uTime * 1.70) * 1.40 * 0.07
              + cos(p.z * 1.20 + p.x * 0.40 - uTime * 1.30) * 0.40 * 0.05;
    float dz =  cos(p.z * 0.55 + uTime * 0.85) * 0.55 * 0.11
              - cos(p.x * 1.40 - p.z * 0.80 + uTime * 1.70) * 0.80 * 0.07
              + cos(p.z * 1.20 + p.x * 0.40 - uTime * 1.30) * 1.20 * 0.05;
    vNormal = normalize(vec3(-dx, 1.0, -dz));

    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const waterFrag = /* glsl */`
  uniform float uTime;
  uniform vec3  uCamPos;
  varying vec2  vUv;
  varying vec3  vWorldPos;
  varying vec3  vNormal;

  void main() {
    vec3 viewDir = normalize(uCamPos - vWorldPos);

    // Fresnel: more reflective at grazing angles
    float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 3.5);
    fresnel = 0.04 + 0.7 * fresnel;

    // Moving caustic shimmer baked into surface color
    float cx = sin(vWorldPos.x * 1.9 + uTime * 2.1) * sin(vWorldPos.z * 1.6 - uTime * 1.7);
    float caustic = pow(max(cx, 0.0), 3.0) * 0.45;

    vec3 deep  = vec3(0.01, 0.09, 0.25);
    vec3 light = vec3(0.30, 0.72, 0.95);
    vec3 col   = mix(deep, light, clamp(fresnel + caustic, 0.0, 1.0));

    float alpha = 0.50 + fresnel * 0.38;
    gl_FragColor = vec4(col, alpha);
  }
`;

function buildWaterSurface() {
  const geo = new THREE.PlaneGeometry(TANK.w - 0.6, TANK.d - 0.6, 80, 80);
  const mat = new THREE.ShaderMaterial({
    vertexShader:   waterVert,
    fragmentShader: waterFrag,
    uniforms: {
      uTime:   { value: 0.0 },
      uCamPos: { value: camera.position.clone() },
    },
    transparent: true,
    depthWrite:  false,
    side: THREE.DoubleSide,
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y  = TANK.h / 2 - 0.4;
  scene.add(mesh);
  return mesh;
}

const waterSurface = buildWaterSurface();

// ============================================================
// CAUSTIC FLOOR PROJECTION  — scrolling shader on the sand
// ============================================================
const causticFrag = /* glsl */`
  uniform float uTime;
  varying vec2 vUv;

  // Cheap caustic pattern from two rotated sine grids
  float causticPattern(vec2 uv, float t) {
    vec2 a = vec2(sin(t * 0.7), cos(t * 0.5));
    float g1 = sin(dot(uv * 12.0, a) + t * 1.8);
    float g2 = sin(dot(uv * 9.0, vec2(-a.y, a.x)) - t * 1.3);
    return pow(abs(g1 * g2), 1.8);
  }

  void main() {
    float c  = causticPattern(vUv, uTime);
    float c2 = causticPattern(vUv + 0.3, uTime * 0.8 + 1.57);
    float pattern = (c + c2) * 0.5;

    vec3 sand   = vec3(0.62, 0.41, 0.22);
    vec3 bright = vec3(0.92, 0.82, 0.60);
    vec3 col = mix(sand, bright, pattern * 0.55);
    gl_FragColor = vec4(col, 1.0);
  }
`;
const causticVert = /* glsl */`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

function buildCausticFloor() {
  const geo = new THREE.PlaneGeometry(TANK.w - 0.6, TANK.d - 0.6, 1, 1);
  const mat = new THREE.ShaderMaterial({
    vertexShader:   causticVert,
    fragmentShader: causticFrag,
    uniforms: { uTime: { value: 0.0 } },
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y  = -TANK.h / 2 + 0.07;
  mesh.receiveShadow = false;
  scene.add(mesh);
  return mesh;
}

const causticFloor = buildCausticFloor();

// ============================================================
// CAMERA CONTROLLER  — outside / inside views with auto-switching
// ============================================================
const CAM_MODE = { OUTSIDE: 'outside', INSIDE: 'inside' };
let camMode = CAM_MODE.OUTSIDE;

// Each preset: where the camera sits, and what it looks at
const OUTSIDE_PRESETS = [
  { pos: new THREE.Vector3(  0,   8,  56), look: new THREE.Vector3(  0,  0,  0) }, // front centre
  { pos: new THREE.Vector3( 56,   5,   0), look: new THREE.Vector3(  0,  0,  0) }, // right side
  { pos: new THREE.Vector3(-56,   5,   0), look: new THREE.Vector3(  0,  0,  0) }, // left side
  { pos: new THREE.Vector3(  0,   8, -56), look: new THREE.Vector3(  0,  0,  0) }, // back
  { pos: new THREE.Vector3( 40,  16,  38), look: new THREE.Vector3(  0, -3,  0) }, // front-right elevated
  { pos: new THREE.Vector3(-40,  16,  38), look: new THREE.Vector3(  0, -3,  0) }, // front-left elevated
  { pos: new THREE.Vector3(  0,  34,  28), look: new THREE.Vector3(  0, -6,  0) }, // high front
  { pos: new THREE.Vector3( 52,  -6,  20), look: new THREE.Vector3(  0,  0,  0) }, // low side angle
];

const INSIDE_PRESETS = [
  { pos: new THREE.Vector3(  0,   0,   0), look: new THREE.Vector3( 18,  2,  0) }, // dead centre → right
  { pos: new THREE.Vector3(-22,   1,   0), look: new THREE.Vector3(  0,  1,  0) }, // left wall → centre
  { pos: new THREE.Vector3( 18,  -8,   8), look: new THREE.Vector3(-10,  2, -6) }, // low right → up-left
  { pos: new THREE.Vector3(  0,   2, -14), look: new THREE.Vector3(  0,  2, 14) }, // back wall → front
  { pos: new THREE.Vector3(-18,   8, -10), look: new THREE.Vector3( 12, -1,  8) }, // upper-back corner
  { pos: new THREE.Vector3(  8,   0,  14), look: new THREE.Vector3( -8,  1,-10) }, // front → back
  { pos: new THREE.Vector3(  0,  11,   0), look: new THREE.Vector3( 14, -4, 10) }, // near surface → down
  { pos: new THREE.Vector3( 14, -10,  -6), look: new THREE.Vector3( -6,  4,  6) }, // near floor → up
];

// State
let camPresetIdx  = 0;
let camSwitchTimer = 0;
const CAM_SWITCH_INTERVAL = 9;   // seconds between shots
const CAM_LERP_SPEED      = 1.4; // position / look lerp rate

// Working vectors — lerped toward target each frame
const camCurrentPos  = new THREE.Vector3().copy(OUTSIDE_PRESETS[0].pos);
const camCurrentLook = new THREE.Vector3().copy(OUTSIDE_PRESETS[0].look);
let   camTargetPos   = new THREE.Vector3().copy(OUTSIDE_PRESETS[0].pos);
let   camTargetLook  = new THREE.Vector3().copy(OUTSIDE_PRESETS[0].look);

// Place camera at first preset immediately
camera.position.copy(camCurrentPos);
camera.lookAt(camCurrentLook);

let onPresetChanged = () => {}; // UI can hook into this

function pickNextPreset() {
  const list = camMode === CAM_MODE.OUTSIDE ? OUTSIDE_PRESETS : INSIDE_PRESETS;
  camPresetIdx = (camPresetIdx + 1) % list.length;
  camTargetPos  = list[camPresetIdx].pos.clone();
  camTargetLook = list[camPresetIdx].look.clone();
  onPresetChanged();
}

function switchMode(mode) {
  camMode = mode;
  camPresetIdx   = 0;
  camSwitchTimer = 0;
  const list = camMode === CAM_MODE.OUTSIDE ? OUTSIDE_PRESETS : INSIDE_PRESETS;
  camTargetPos  = list[0].pos.clone();
  camTargetLook = list[0].look.clone();
  // Adjust fog density: denser when inside to sell the underwater depth
  scene.fog.density = camMode === CAM_MODE.INSIDE ? 0.022 : 0.012;
  updateUIButtons();
  onPresetChanged(); // refresh dots immediately
}

function updateCamera(delta) {
  camSwitchTimer += delta;
  if (camSwitchTimer >= CAM_SWITCH_INTERVAL) {
    camSwitchTimer = 0;
    pickNextPreset();
  }
  const t = Math.min(delta * CAM_LERP_SPEED, 1.0);
  camCurrentPos.lerp(camTargetPos, t);
  camCurrentLook.lerp(camTargetLook, t);
  camera.position.copy(camCurrentPos);
  camera.lookAt(camCurrentLook);
}

// ============================================================
// FISH — procedural geometry + boid flocking
// ============================================================
const SPECIES = [
  { name: 'clownfish',  bodyColor: 0xff6600, finColor: 0xffffff, size: 1.0, speed: 3.8, count: 6  },
  { name: 'blue_tang',  bodyColor: 0x1155dd, finColor: 0xffdd00, size: 1.2, speed: 4.5, count: 5  },
  { name: 'angelfish',  bodyColor: 0xffcc00, finColor: 0x222222, size: 1.3, speed: 3.0, count: 4  },
  { name: 'neon_tetra', bodyColor: 0x00ddcc, finColor: 0xff2222, size: 0.65, speed: 6.0, count: 10 },
  { name: 'guppy',      bodyColor: 0xff44bb, finColor: 0x44ffcc, size: 0.7,  speed: 5.5, count: 8  },
];

function buildFishMesh(species) {
  const s   = species.size;
  const col = species.bodyColor;
  const fin = species.finColor;
  const group = new THREE.Group();

  // Body — stretched sphere
  const bodyGeo = new THREE.SphereGeometry(s * 0.5, 14, 9);
  bodyGeo.scale(2.0, 0.78, 0.85);
  const bodyMat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.25, metalness: 0.15 });
  const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
  bodyMesh.castShadow = true;
  group.add(bodyMesh);

  // Tail group — pivot sits at rear of body
  const tailGroup = new THREE.Group();
  tailGroup.position.x = -s * 1.0;
  const tw = s * 0.65, th = s * 0.70;
  const tailGeo = new THREE.BufferGeometry();
  tailGeo.setAttribute('position', new THREE.Float32BufferAttribute([
    // upper lobe
     0,        0,          0,
    -tw,       th * 0.85,  0,
    -tw * 0.3, th * 0.12,  0,
    // lower lobe
     0,        0,          0,
    -tw * 0.3,-th * 0.12,  0,
    -tw,      -th * 0.85,  0,
  ], 3));
  tailGeo.setIndex([0, 1, 2,  3, 4, 5]);
  tailGeo.computeVertexNormals();
  tailGroup.add(new THREE.Mesh(tailGeo, new THREE.MeshStandardMaterial({
    color: col, roughness: 0.35, side: THREE.DoubleSide, transparent: true, opacity: 0.88,
  })));
  group.add(tailGroup);

  // Dorsal fin
  const dorsalGeo = new THREE.BufferGeometry();
  dorsalGeo.setAttribute('position', new THREE.Float32BufferAttribute([
    -s * 0.25, s * 0.39,  0,
     s * 0.38, s * 0.39,  0,
     s * 0.05, s * 0.39 + s * 0.55, 0,
  ], 3));
  dorsalGeo.setIndex([0, 2, 1]);
  dorsalGeo.computeVertexNormals();
  const finMat = new THREE.MeshStandardMaterial({
    color: fin, roughness: 0.45, side: THREE.DoubleSide, transparent: true, opacity: 0.80,
  });
  group.add(new THREE.Mesh(dorsalGeo, finMat));

  // Anal fin (underside, smaller)
  const analGeo = new THREE.BufferGeometry();
  analGeo.setAttribute('position', new THREE.Float32BufferAttribute([
    -s * 0.1,  -s * 0.39, 0,
     s * 0.2,  -s * 0.39, 0,
     s * 0.05, -s * 0.39 - s * 0.32, 0,
  ], 3));
  analGeo.setIndex([0, 1, 2]);
  analGeo.computeVertexNormals();
  group.add(new THREE.Mesh(analGeo, finMat.clone()));

  // Pectoral fins (left & right)
  for (const side of [-1, 1]) {
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.Float32BufferAttribute([
      s * 0.15, -s * 0.05,  0,
      s * 0.15, -s * 0.05,  side * s * 0.05,
     -s * 0.1,  -s * 0.22,  side * s * 0.5,
      s * 0.30, -s * 0.12,  side * s * 0.38,
    ], 3));
    pGeo.setIndex([0, 2, 3,  0, 1, 2]);
    pGeo.computeVertexNormals();
    group.add(new THREE.Mesh(pGeo, new THREE.MeshStandardMaterial({
      color: col, roughness: 0.45, side: THREE.DoubleSide, transparent: true, opacity: 0.75,
    })));
  }

  // Eyes (white + pupil)
  const eyeGeo   = new THREE.SphereGeometry(s * 0.09, 8, 8);
  const pupilGeo = new THREE.SphereGeometry(s * 0.05, 6, 6);
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 });
  const darkMat  = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.1 });
  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(eyeGeo, whiteMat);
    eye.position.set(s * 0.82, s * 0.10, side * s * 0.32);
    group.add(eye);
    const pupil = new THREE.Mesh(pupilGeo, darkMat);
    pupil.position.set(s * 0.89, s * 0.10, side * s * 0.36);
    group.add(pupil);
  }

  // Clownfish — two white body stripes
  if (species.name === 'clownfish') {
    const stMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3, side: THREE.DoubleSide });
    for (const xOff of [0.25, -0.18]) {
      const sGeo = new THREE.CylinderGeometry(s * 0.43, s * 0.43, s * 0.20, 14, 1, true);
      const stripe = new THREE.Mesh(sGeo, stMat);
      stripe.rotation.z = Math.PI / 2;
      stripe.position.x = xOff * s;
      group.add(stripe);
    }
  }

  // Angelfish — taller body
  if (species.name === 'angelfish') {
    bodyMesh.scale.set(0.85, 1.55, 0.70);
  }

  return { group, tailGroup, bodyMesh };
}

class Fish {
  constructor(species, school) {
    this.species  = species;
    this.school   = school;
    this.maxSpeed = species.speed * (0.85 + Math.random() * 0.30);
    this.minSpeed = this.maxSpeed * 0.35;

    const margin = 4;
    this.pos = new THREE.Vector3(
      (Math.random() - 0.5) * (TANK.w - margin * 2),
      (Math.random() - 0.5) * (TANK.h * 0.55),
      (Math.random() - 0.5) * (TANK.d - margin * 2)
    );
    this.vel = new THREE.Vector3(
      (Math.random() - 0.5), (Math.random() - 0.5) * 0.3, (Math.random() - 0.5)
    ).normalize().multiplyScalar(this.maxSpeed * 0.8);
    this.acc = new THREE.Vector3();

    this.swimPhase = Math.random() * Math.PI * 2;
    this.swimFreq  = 2.5 + Math.random() * 1.5;
    this._lookTarget = new THREE.Vector3();

    const { group, tailGroup, bodyMesh } = buildFishMesh({ ...species, size: species.size * (0.82 + Math.random() * 0.36) });
    this.group     = group;
    this.tailGroup = tailGroup;
    this.bodyMesh  = bodyMesh;
    this.group.position.copy(this.pos);
    scene.add(this.group);
  }

  _steer(desired, weight) {
    return desired.clone().normalize().multiplyScalar(this.maxSpeed)
      .sub(this.vel).clampLength(0, 0.8).multiplyScalar(weight);
  }

  update(delta) {
    // Swim animation
    this.swimPhase += this.swimFreq * delta;
    const wagAmt = 0.38 + (this.vel.length() / this.maxSpeed) * 0.18;
    this.tailGroup.rotation.y = Math.sin(this.swimPhase) * wagAmt;
    this.bodyMesh.rotation.y  = Math.sin(this.swimPhase + 0.6) * 0.07;

    // Boid neighbours
    const PERCEPTION = 9.0;
    const SEP_DIST   = 2.8;
    let sepF = new THREE.Vector3(), aliF = new THREE.Vector3(), cohP = new THREE.Vector3();
    let sepN = 0, nbN = 0;

    for (const other of this.school) {
      if (other === this) continue;
      const d = this.pos.distanceTo(other.pos);
      if (d < PERCEPTION) {
        cohP.add(other.pos);
        aliF.add(other.vel);
        nbN++;
        if (d < SEP_DIST && d > 0.001) {
          sepF.add(new THREE.Vector3().subVectors(this.pos, other.pos).normalize().divideScalar(d));
          sepN++;
        }
      }
    }

    this.acc.set(0, 0, 0);
    if (nbN > 0) {
      this.acc.add(this._steer(cohP.divideScalar(nbN).sub(this.pos), 0.9));
      this.acc.add(this._steer(aliF.divideScalar(nbN), 1.0));
    }
    if (sepN > 0) this.acc.add(this._steer(sepF.divideScalar(sepN), 2.2));

    // Soft wall repulsion
    const margin = 5.5, wStr = 4.0;
    const hw = TANK.w / 2 - 0.5, hh = TANK.h / 2 - 0.5, hd = TANK.d / 2 - 0.5;
    const wx = Math.max(0, margin - (hw - Math.abs(this.pos.x))) / margin;
    const wy = Math.max(0, margin - (hh - Math.abs(this.pos.y))) / margin;
    const wz = Math.max(0, margin - (hd - Math.abs(this.pos.z))) / margin;
    if (wx > 0) this.acc.x -= Math.sign(this.pos.x) * wx * wStr;
    if (wy > 0) this.acc.y -= Math.sign(this.pos.y) * wy * wStr;
    if (wz > 0) this.acc.z -= Math.sign(this.pos.z) * wz * wStr;

    // Random wander
    this.acc.add(new THREE.Vector3(
      (Math.random() - 0.5) * 0.6,
      (Math.random() - 0.5) * 0.25,
      (Math.random() - 0.5) * 0.6,
    ));

    // Integrate velocity
    this.vel.addScaledVector(this.acc, delta);
    const spd = this.vel.length();
    if (spd > this.maxSpeed) this.vel.setLength(this.maxSpeed);
    if (spd < this.minSpeed) this.vel.setLength(this.minSpeed);
    this.vel.y *= 0.96; // bias toward horizontal swimming

    // Move
    this.pos.addScaledVector(this.vel, delta);
    this.pos.x = THREE.MathUtils.clamp(this.pos.x, -hw, hw);
    this.pos.y = THREE.MathUtils.clamp(this.pos.y, -hh, hh);
    this.pos.z = THREE.MathUtils.clamp(this.pos.z, -hd, hd);

    // Orient mesh toward velocity
    this.group.position.copy(this.pos);
    if (this.vel.length() > 0.05) {
      this._lookTarget.copy(this.pos).add(this.vel);
      this.group.lookAt(this._lookTarget);
      // Bank (roll) slightly into horizontal turns
      this.group.rotateZ(-THREE.MathUtils.clamp(this.vel.x * 0.04, -0.35, 0.35));
    }
  }
}

// Spawn all schools
const allFish = [];
for (const species of SPECIES) {
  const school = [];
  for (let i = 0; i < species.count; i++) {
    const fish = new Fish(species, school);
    school.push(fish);
    allFish.push(fish);
  }
}

// ============================================================
// ANIMATION LOOP
// ============================================================
const clock = new THREE.Clock();

function animate() {
  const delta = Math.min(clock.getDelta(), 0.05);
  const time  = clock.elapsedTime;

  // Camera
  updateCamera(delta);

  // Fish
  for (const fish of allFish) fish.update(delta);

  // Water surface animation
  waterSurface.material.uniforms.uTime.value   = time;
  waterSurface.material.uniforms.uCamPos.value.copy(camera.position);

  // Caustic floor animation
  causticFloor.material.uniforms.uTime.value = time;

  // Animate caustic point lights (shimmer above floor)
  causticLights.forEach(cl => {
    const t = time * cl.speed + cl.phase;
    cl.light.position.x = Math.sin(t)        * TANK.w * 0.32;
    cl.light.position.z = Math.cos(t * 0.73) * TANK.d * 0.32;
    cl.light.intensity  = 1.8 + Math.sin(t * 2.8) * 0.9;
  });

  renderer.render(scene, camera);
}

if(WebGL.isWebGL2Available()) {
  renderer.setAnimationLoop(animate);
} else {
  const warning = WebGL.getWebGL2ErrorMessage();
  document.getElementById('container').appendChild(warning);
}

// ============================================================
// UI OVERLAY — view mode buttons
// ============================================================
const uiCSS = `
  #fishlive-ui {
    position: fixed;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 100;
    font-family: 'Segoe UI', system-ui, sans-serif;
  }
  #fishlive-ui button {
    padding: 9px 22px;
    border: 1.5px solid rgba(120,200,255,0.35);
    border-radius: 999px;
    background: rgba(0,20,50,0.55);
    color: rgba(160,220,255,0.75);
    font-size: 13px;
    letter-spacing: 0.06em;
    cursor: pointer;
    backdrop-filter: blur(8px);
    transition: background 0.25s, color 0.25s, border-color 0.25s;
  }
  #fishlive-ui button:hover {
    background: rgba(0,60,120,0.7);
    color: #fff;
    border-color: rgba(120,200,255,0.7);
  }
  #fishlive-ui button.active {
    background: rgba(0,90,180,0.75);
    color: #fff;
    border-color: rgba(100,190,255,0.9);
  }
  #fishlive-timer {
    position: fixed;
    bottom: 68px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    display: flex;
    gap: 5px;
    align-items: center;
  }
  #fishlive-timer span {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(120,200,255,0.3);
    transition: background 0.4s;
  }
  #fishlive-timer span.active {
    background: rgba(120,200,255,0.9);
  }
`;
const styleEl = document.createElement('style');
styleEl.textContent = uiCSS;
document.head.appendChild(styleEl);

const ui = document.createElement('div');
ui.id = 'fishlive-ui';

const btnOutside = document.createElement('button');
btnOutside.textContent = '⬜ Outside View';
btnOutside.addEventListener('click', () => switchMode(CAM_MODE.OUTSIDE));

const btnInside = document.createElement('button');
btnInside.textContent = '🐠 Inside View';
btnInside.addEventListener('click', () => switchMode(CAM_MODE.INSIDE));

ui.appendChild(btnOutside);
ui.appendChild(btnInside);
document.body.appendChild(ui);

// Shot-progress dots (one dot per preset)
const timerBar = document.createElement('div');
timerBar.id = 'fishlive-timer';
document.body.appendChild(timerBar);

function updateUIButtons() {
  btnOutside.classList.toggle('active', camMode === CAM_MODE.OUTSIDE);
  btnInside.classList.toggle('active',  camMode === CAM_MODE.INSIDE);

  // Rebuild dots for current preset list
  const count = camMode === CAM_MODE.OUTSIDE ? OUTSIDE_PRESETS.length : INSIDE_PRESETS.length;
  timerBar.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('span');
    timerBar.appendChild(dot);
  }
  refreshDots();
}

function refreshDots() {
  const dots = timerBar.querySelectorAll('span');
  dots.forEach((d, i) => d.classList.toggle('active', i === camPresetIdx));
}

// Wire dot refresh into the preset-change hook defined in the camera controller
onPresetChanged = refreshDots;

// Initial UI state
updateUIButtons();
