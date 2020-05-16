import React, { useState, useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, useFrame, extend, useThree } from "react-three-fiber"
import { useSpring, a } from "react-spring/three"

import "../../styles/styles.css"

extend({ OrbitControls })

// Controls Component
const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()
  useFrame(() => {
    orbitRef.current.update()
  })
  return (
    <orbitControls
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

// Symbol Component
const Symbol = () => {
  const [model, setModel] = useState()
  const [active, setActive] = useState(false)
  const props = useSpring({
    scale: active ? [30, 30, 30] : [50, 50, 50],
  })
  useEffect(() => {
    setActive(active => !active)
  }, [])

  useEffect(() => {
    new GLTFLoader().load("/symbol.glb", setModel)
  }, [])
  console.log(model)
  return model ? (
    <a.primitive
      onClick={() => setActive(!active)}
      position={[0, -4, -2]}
      scale={props.scale}
      object={model.scene}
    />
  ) : null
}

export default () => {
  return (
    <Canvas
      camera={{ position: [-7, 10, 20] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}
    >
      <ambientLight intensity={0.9} />
      <pointLight position={[2, 2, 2]} />
      <Controls />
      <Symbol />
    </Canvas>
  )
}
