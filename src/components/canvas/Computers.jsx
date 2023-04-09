import { Suspense, useEffect, useState } from 'react';

//empty canvas to let us place something on it.
import { Canvas } from '@react-three/fiber';

//helps us draw on canvas, useGLTF lets us import 3D models.
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    //when working with 3D files we use mesh instead of divs.
    // need hemisphereLight to see the animation
    <mesh>
      <hemisphereLight intensity={2.0} groundColor='white' />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive
        object={ computer.scene }
        scale={ isMobile ? 0.50 : 0.80 }
        position={ isMobile ? [0.7, 1, -0.60] : [1, -0.75, -1] }
        rotation={[0, -0.2, -0.1]} />
    </mesh>
  )
}

//Suspense is from React to show a loader while waiting for everything to load.
//OrbitControls allows us to move the computer around.
//max/min PolarAngle is what tells us our moving range of the computer. can only rotate around specific angle
//Sometimes it takes too long to load and breaks the browser so we use fallback property on Suspense to use CanvasLoader component instead
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener to check for screen size
    const mediaQuery = window.matchMedia('(max-width: 499px)');
    // set initial value of isMobile state variable
    setIsMobile(mediaQuery.matches);
    // define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    //remove listender when component is unmounted
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  })
  return (
    <Canvas
      frameLoop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.2}
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
