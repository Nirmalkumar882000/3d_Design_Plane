import {
  Backdrop,
  Environment,
  Float,
  OrbitControls,
  Ring,
  RoundedBox,
  Scroll,
  ScrollControls,
  Sparkles,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import baffle from 'baffle'
import { Aeroplane } from "./Aeroplane";

function App() {

  useEffect(()=> {
    const target = baffle('.title')
    target.set({
      characters: '░D░r░e░a░m░T░r░░a░v░e░l░░s░',
      speed:200
    })
    target.start()
    target.reveal(1000,1000)
  })
  return (
    <>
     <color attach="background" args={['#333333']} />
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <Environment
        preset='warehouse'
      />
      <ScrollControls pages={6} damping={0.1}>
        {/* <OrbitControls/>   */}
        <Aeroplane rotation-y={Math.PI /-1} rotation-x={0.2} scale={0.1}/>
        <Sparkles size={2} color={"#fff"} scale={[10,10,10]}></Sparkles>
        <Backdrop
          receiveShadow
          floor={20.5} 
          segments={100}
          scale={[50,30,10]}
          position={[4,-10,0]}
        >
          <meshStandardMaterial color="#0a1a1f" />
        </Backdrop>  

        <Float 
           speed={4} 
           rotationIntensity={0.5} 
           floatIntensity={1} 
           floatingRange={[1, 1]} 
        >
        <Ring scale={4} position-z={-2.5} position-y={0.5} args={[0, 0.95, 60]} receiveShadow>
          <meshStandardMaterial color="#2a3a3f" />
        </Ring> 
        </Float>


        <Scroll>
          
        </Scroll>
        <Scroll html style={{width: '100%'}}>
          <h1 className='title' style={{ color: '#cdcbca',position: 'absolute', top: `65vh`,left: '55%', fontSize: '10em', transform: `translate(-50%,-50%)` }}>Dream Travels</h1>
          
          <div className='row' style={{ position: 'absolute', top: `130vh`}}>
            <h2>Example 1.</h2>
            <p style={{ maxWidth: '400px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <button>Read more</button>
          </div>

          <div className='row' style={{ position: 'absolute', top: `230vh`}}>
            <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px"}}>
              <h2 style={{ maxWidth: "440px" }}>Example 2</h2>
              <p style={{ maxWidth: '440px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>                
              <button>Read more</button>
            </div>
          </div>
          
          <h2 style={{ position: 'absolute', top: '350vh', left: '50%', transform: `translate(-50%,-50%)` }}>Example 3</h2>              
          
          <button style={{ position: 'absolute', top: `590vh`,left: '50%', transform: `translate(-50%,-50%)` }}>Get More</button>
        </Scroll>

      </ScrollControls>
     
    </>
  );
}

export default App;




function Try(){


  return(
    <>
    <mesh scale={2}  >
    <ambientLight />
      <OrbitControls />
            <RoundedBox args={[1,1,1]}>
              <mesh >
                <boxGeometry />
                <meshBasicMaterial color={"green"} wireframe />
              </mesh>
            </RoundedBox>
          </mesh>

    </>
  )
}



