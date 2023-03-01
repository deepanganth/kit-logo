import ReactDOM from 'react-dom'
import React, { Suspense,useRef} from 'react'
import { Canvas, useLoader,useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";
import display from './kit2.glb';
import './styles.css'
function Object() {

  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.y += 0.01
  })

  const gltf = useLoader(GLTFLoader, display)
  return <primitive ref={mesh}  object={gltf.scene} position={[0, -3.5, 0]} />
}

function App() {
  return (
    <>
      <Canvas >
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <spotLight intensity={0.8} position={[300, 300, 400]} />
        <Suspense >{<Object/>}</Suspense>
      </Canvas>
      <div className='designer'>
        <h3>Designed by</h3>
        <h1>Deepanganth M</h1>
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
