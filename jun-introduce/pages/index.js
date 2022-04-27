import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import Image from "next/image";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function Home() {
  return (
    <>
      <div style={{ margin: "0 auto", maxWidth: "500px" }}>
        <Image src="/b.jpeg" alt="" width={200} height={200} />
        <h1 style={{ color: "#fa5959" }}>
          안녕하세요. <br /> 박남준입니다.
        </h1>
      </div>

      <div>React.js</div>
      <div>Styled-Components, Emotion, Styletron</div>
      <div>HTML5</div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </>
  );
}
