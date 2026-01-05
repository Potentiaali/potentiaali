import { Suspense, useMemo, useEffect, useState, useRef } from 'react';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';

// Extend fiber with OrbitControls
extend({ OrbitControls });

const mapScale = 0.077;
const EYE_LEVEL = 1.7; // 1.7 meters tall

const KeyboardControls = ({ controlsRef, godMode }) => {
  const { camera } = useThree();
  const [keys, setKeys] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => setKeys((k) => ({ ...k, [e.code]: true }));
    const handleKeyUp = (e) => setKeys((k) => ({ ...k, [e.code]: false }));
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame((state, delta) => {
    if (!controlsRef || !controlsRef.current) return;

    const speed = 5 * delta;
    const turnSpeed = 1.5 * delta;
    const frontVector = new THREE.Vector3();
    const sideVector = new THREE.Vector3();

    const forward = (keys['KeyW'] || keys['ArrowUp'] ? 1 : 0) - (keys['KeyS'] || keys['ArrowDown'] ? 1 : 0);
    const side = (keys['KeyA'] || keys['ArrowLeft'] ? 1 : 0) - (keys['KeyD'] || keys['ArrowRight'] ? 1 : 0);

    if (forward !== 0 || side !== 0) {
      camera.getWorldDirection(frontVector);
      frontVector.y = 0;
      frontVector.normalize();

      if (godMode) {
        // God Mode: Strafe with A/D
        sideVector.copy(frontVector).applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
        const moveVector = new THREE.Vector3()
          .addScaledVector(frontVector, forward * speed)
          .addScaledVector(sideVector, side * speed);

        camera.position.add(moveVector);
        controlsRef.current.target.add(moveVector);
      } else {
        // Walk Mode: Forward/Backward with W/S, Turn with A/D
        // Move
        if (forward !== 0) {
          camera.position.addScaledVector(frontVector, forward * speed);
          controlsRef.current.target.addScaledVector(frontVector, forward * speed);
        }

        // Turn
        if (side !== 0) {
          // Rotate target around camera to change direction
          const relativeTarget = new THREE.Vector3().subVectors(controlsRef.current.target, camera.position);
          relativeTarget.applyAxisAngle(new THREE.Vector3(0, 1, 0), side * turnSpeed);
          controlsRef.current.target.addVectors(camera.position, relativeTarget);
        }

        // Enforce eye level
        camera.position.y = EYE_LEVEL;
      }
      controlsRef.current.update();
    }
  });

  return null;
};

const DevOverlay = ({ controlsRef, setPos, setTarget }) => {
  const { camera } = useThree();

  useFrame(() => {
    if (import.meta.env.DEV) {
      if (window.logTimer && Date.now() - window.logTimer < 1000) return;
      window.logTimer = Date.now();

      const pos = camera.position;
      const target = controlsRef.current?.target;

      setPos({ x: pos.x, y: pos.y, z: pos.z });
      if (target) {
        setTarget({ x: target.x, y: target.y, z: target.z });
      }

      console.log(`Camera Position: x: ${pos.x.toFixed(2)}, y: ${pos.y.toFixed(2)}, z: ${pos.z.toFixed(2)}`);
      if (target) {
        console.log(`Controls Target: x: ${target.x.toFixed(2)}, y: ${target.y.toFixed(2)}, z: ${target.z.toFixed(2)}`);
      }
    }
  });

  return null;
};

const Controls = ({ controlsRef, godMode }) => {
  const { camera, gl } = useThree();

  useEffect(() => {
    if (controlsRef.current) {
      if (godMode) {
        // God mode: Look down from above
        camera.position.set(15, 40, 15);
        controlsRef.current.target.set(0, 0, 0);
      } else {
        // Walk mode: Position at eye level
        camera.position.set(14.96, EYE_LEVEL, 12.32);
        controlsRef.current.target.set(39.93, EYE_LEVEL, 13.44);
      }
      controlsRef.current.update();
    }
  }, [godMode, camera, controlsRef]);

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableDamping
      dampingFactor={0.1}
      maxPolarAngle={godMode ? Math.PI / 1.5 : Math.PI / 1.8} // Prevent going under floor
      minDistance={godMode ? 5 : 0.1}
    />
  );
};


const Human = ({ model, position, orientation = 0 }) => {
  const clone = useMemo(() => {
    if (!model) return null;
    // We use SkeletonUtils.clone for a "deep copy" of the Three.js model hierarchy.
    // Note: structuredClone doesn't work with Three.js objects as they have complex prototypes and circular references.
    const c = SkeletonUtils.clone(model);

    // Reset internal position to origin so the wrapper group handles the actual placement.
    // This solves the issue where the model file might have a built-in offset.
    c.position.set(0, 0, 0);

    c.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return c;
  }, [model]);

  if (!clone) return null;

  return (
    <group position={position} rotation={[0, 0, orientation]}>
      <primitive
        object={clone}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1 / mapScale}
      />
    </group>
  );
};

const VenueMap = ({ url }) => {
  const svgData = useLoader(SVGLoader, url);
  const gltfColor = useLoader(GLTFLoader, '/assets/ThamColor.glb');
  const gltfTham = useLoader(GLTFLoader, '/assets/Tham.glb');
  const gltfThanh = useLoader(GLTFLoader, '/assets/Thanh.glb');

  const models = useMemo(() => [gltfColor.scene, gltfTham.scene, gltfThanh.scene], [gltfColor, gltfTham, gltfThanh]);

  const { shapes, center, width, height, stands, humans } = useMemo(() => {
    const standData = [];
    const humanData = [];
    const allShapes = svgData.paths.flatMap((path) => {
      const pathShapes = SVGLoader.createShapes(path);
      const colorHex = path.color.getHex();

      const isStand = colorHex === 0xffdd55;
      const isHumanSpot = colorHex === 0xff00ff; // Magenta spots for explicit humans

      if (isHumanSpot) {
        pathShapes.forEach((shape) => {
          const b = new THREE.Box2().setFromPoints(shape.getPoints());
          const c = new THREE.Vector2();
          b.getCenter(c);
          humanData.push({ x: c.x, y: c.y });
        });
        return []; // Don't render magenta spots as meshes
      }

      const isWall = colorHex === 0x000000 && (pathShapes[0] ? (new THREE.Box2().setFromPoints(pathShapes[0].getPoints()).getSize(new THREE.Vector2()).x <= 12 || new THREE.Box2().setFromPoints(pathShapes[0].getPoints()).getSize(new THREE.Vector2()).y <= 12) : false);

      let color = path.color;
      if (isWall) {
        color = new THREE.Color(0xdddddd);
      } else if (!isStand) {
        const r = path.color.r;
        const g = path.color.g;
        const b = path.color.b;
        const isGrayscale = Math.abs(r - g) < 0.05 && Math.abs(g - b) < 0.05;
        if (isGrayscale || colorHex === 0x000000) {
          color = new THREE.Color(0xffffff);
        }
      }

      const mappedShapes = pathShapes.map((shape) => ({
        shape,
        color,
        isStand,
        isWall
      }));

      if (isStand) {
        pathShapes.forEach(shape => {
          const b = new THREE.Box2().setFromPoints(shape.getPoints());
          const c = new THREE.Vector2();
          b.getCenter(c);
          standData.push({ x: c.x, y: c.y });
        });
      }

      return mappedShapes;
    });

    return {
      shapes: allShapes,
      center: [-1567.8524 / 2, -931.00659 / 2],
      width: 1567.8524,
      height: 931.00659,
      stands: standData,
      humans: humanData
    };
  }, [svgData]);

  return (
    <group rotation={[-Math.PI / 2, 0, 0]} scale={[-mapScale, mapScale, mapScale]}>
      <group position={[center[0], center[1], 0]}>
        <mesh position={[0, 0, -0.1]} receiveShadow>
          <planeGeometry args={[width, height]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Manual human spots from SVG */}
        {humans.map((pos, i) => {
          const isNorth = pos.y < 300;
          const orientation = isNorth ? Math.PI : 0;
          return <Human key={`manual-human-${i}`} model={models[i % models.length]} position={[pos.x, pos.y, 0]} orientation={orientation} />;
        })}

        {/* Automatic humans from stands (if no manual spots are near) */}
        {stands.map((pos, i) => {
          // Skip auto-humans if we have manual spots (simple heuristic: if any manual spot is very close)
          if (humans.some(h => Math.sqrt((h.x - pos.x) ** 2 + (h.y - pos.y) ** 2) < 50)) return null;

          // Row g14 (A-odd) is at y ~ 280.
          // Row g26 (A-even) is at y ~ 320.
          // Row B is at y ~ 295.
          // Main walkway is between B and A-even row.
          
          let yOffset = -10;
          let orientation = Math.PI;

          if (pos.y > 310) {
            // Row g26 and anything below faces North towards the main walkway
            yOffset = 10;
            orientation = 0;
          }
          // Row g14 and B row face South towards their respective walkways

          return (
            <group key={`humans-${i}`}>
              <Human model={models[(i * 2) % models.length]} position={[pos.x - 8, pos.y + yOffset, 0]} orientation={orientation} />
              <Human model={models[(i * 2 + 1) % models.length]} position={[pos.x + 8, pos.y + yOffset, 0]} orientation={orientation} />
            </group>
          );
        })}

        {shapes.map((item, index) => {
          const zOffset = index * 0.01;

          if (item.isWall) {
            return (
              <mesh key={`wall-${index}`} position={[0, 0, zOffset]} castShadow receiveShadow>
                <extrudeGeometry
                  args={[
                    item.shape,
                    { depth: 39, bevelEnabled: false }
                  ]}
                />
                <meshStandardMaterial color={item.color} />
              </mesh>
            );
          }

          if (item.isStand) {
            return (
              <group key={`stand-${index}`} position={[0, 0, zOffset]}>
                <mesh position={[0, 0, 9]} castShadow receiveShadow>
                  <extrudeGeometry
                    args={[
                      item.shape,
                      { depth: 1, bevelEnabled: false }
                    ]}
                  />
                  <meshStandardMaterial color={item.color} />
                </mesh>
                <mesh castShadow receiveShadow>
                  <extrudeGeometry
                    args={[
                      item.shape,
                      { depth: 9, bevelEnabled: false }
                    ]}
                  />
                  <meshStandardMaterial color={item.color} transparent opacity={0.6} />
                </mesh>
              </group>
            );
          }

          return (
            <mesh key={`floor-${index}`} position={[0, 0, zOffset]} receiveShadow>
              <extrudeGeometry
                args={[
                  item.shape,
                  { depth: 1, bevelEnabled: false }
                ]}
              />
              <meshStandardMaterial color={item.color} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
};

const Venue3D = () => {
  const controlsRef = useRef();
  const [godMode, setGodMode] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0, z: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0, z: 0 });

  return (
    <div style={{ width: '100%', height: '80vh', background: '#1a1a1a', position: 'relative' }}>
      <Canvas
        shadows
        camera={{ position: [14.96, EYE_LEVEL, 12.32], fov: 50 }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(new THREE.Color('#1a1a1a'));
          scene.fog = new THREE.Fog('#1a1a1a', 20, 200);
        }}
      >
        <ambientLight intensity={1.5} />
        <spotLight position={[50, 100, 50]} angle={0.2} penumbra={1} castShadow />
        <pointLight position={[-20, -20, -20]} intensity={1} />
        <directionalLight position={[0, 50, 0]} intensity={0.5} />

        <Suspense fallback={null}>
          <VenueMap url="/assets/area_new.svg" />
        </Suspense>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
          <planeGeometry args={[2000, 2000]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        <gridHelper args={[1000, 100, '#333333', '#222222']} position={[0, -0.005, 0]} />

        <Controls controlsRef={controlsRef} godMode={godMode} />
        <KeyboardControls controlsRef={controlsRef} godMode={godMode} />
        {import.meta.env.DEV && (
          <DevOverlay setPos={setPos} setTarget={setTarget} controlsRef={controlsRef} />
        )}
      </Canvas>
      <div style={{ position: 'absolute', top: '20px', left: '20px', color: 'white', pointerEvents: 'none' }}>
        <h1>Kumpulan Potentiaali 2026 Venue</h1>
        <p>Interactive 3D Preview (WASD/Arrows to move, Drag to rotate, scroll to zoom)</p>
      </div>

      {import.meta.env.DEV && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(0,0,0,0.7)',
          color: '#00ff00',
          padding: '10px',
          borderRadius: '5px',
          fontFamily: 'monospace',
          fontSize: '12px',
          pointerEvents: 'none',
          zIndex: 20
        }}>
          <div>POS: {pos.x.toFixed(2)}, {pos.y.toFixed(2)}, {pos.z.toFixed(2)}</div>
          <div>TGT: {target.x.toFixed(2)}, {target.y.toFixed(2)}, {target.z.toFixed(2)}</div>
        </div>
      )}

      <button
        onClick={() => setGodMode(!godMode)}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          background: '#ff6b00',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
          zIndex: 10
        }}
      >
        {godMode ? 'Switch to Walk Mode' : 'Switch to God Mode'}
      </button>
    </div>
  );
};

export default Venue3D;
