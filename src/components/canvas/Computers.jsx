import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.glb');
  return (
    <mesh>
      <hemisphereLight intensity={2.0} groundColor='white' />
      <pointLight intensity={1} />
      <spotLight position={[-70, 16, 0]} angle={0.18} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive
        object={ computer.scene }
        scale={ isMobile ? 0.50 : 0.80 }
        position={ isMobile ? [0.7, 1, -0.60] : [1, -0.75, -1] }
        rotation={[0, -0.2, -0.1]} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 499px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  })
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      // gl={{ preserveDrawingBuffer: true }}
      gl={{ powerPreference: "high-performance" }}
      >
        <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate
          // autoRotateSpeed={0.2}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;
