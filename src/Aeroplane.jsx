

import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'

export function Aeroplane(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/aeroplane.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    console.log(actions)
    actions.Animation.play()
  },[])

  const scroll=useScroll()
  const tl=useRef()



  useFrame(()=>{
    tl.current.seek(scroll.offset * tl.current.duration())
  })


  useLayoutEffect(()=>{
    tl.current=gsap.timeline({defaults:{duration:2,ease:"power1.inOut"}})
      // 1 page
    .to(group.current.rotation, {y: -1}, 2)
    .to(group.current.rotation,{y:1},2)
    .to(group.current.rotation,{y:1.5},2)
    .to(group.current.rotation,{y:2},2)
    .to(group.current.rotation,{y:2.5},2)
    .to(group.current.position, {x: 3}, 2)
  
    //  2
    .to(group.current.rotation, {y: -1}, 6)  
    .to(group.current.rotation,{y:-1.5},6)
    .to(group.current.rotation,{y:-2},6)
    .to(group.current.rotation,{y:-2.5},6)
    .to(group.current.position, {x: -3}, 6)
    // 3
    .to(group.current.rotation, {y: 0}, 11)
    .to(group.current.rotation, {x: -1}, 11)
    .to(group.current.position, {x: 0}, 11)
    // // 4
    .to(group.current.rotation, {y: 0}, 13)
    .to(group.current.rotation, {x: 1}, 13)    
    .to(group.current.position, {x: 0}, 13)
    //   // 5
    .to(group.current.rotation, {y: 0}, 16)   
    .to(group.current.rotation, {x: 0}, 16) 
    .to(group.current.position, {x: 0}, 16)    
    //   // 6
    .to(group.current.rotation, {y: Math.PI /-1}, 20)   
    .to(group.current.rotation, {x: 0.2}, 20) 
    .to(group.current.position, {x: 0.}, 20)   

  },[])



  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={4.261}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cylinder006_0" position={[-4.484, 1.66, 0.152]} rotation={[Math.PI / 2, -0.2, 0]} scale={[0.387, 0.666, 0.387]}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['Material.012']} />
                <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials['Material.013']} />
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials['Material.014']} />
                <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Material.015']} />
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Material.016']} />
              </group>
              <group name="Cylinder004_6" position={[-3.185, 1.66, -0.3]} rotation={[Math.PI / 2, -0.2, 0]} scale={[0.387, 0.666, 0.387]}>
                <mesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials['Material.012']} />
                <mesh name="Object_43" geometry={nodes.Object_43.geometry} material={materials['Material.013']} />
                <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials['Material.014']} />
                <mesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials['Material.015']} />
                <mesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials['Material.016']} />
              </group>
              <group name="Cylinder005_7" position={[-1.933, 1.602, -0.765]} rotation={[Math.PI / 2, -0.2, 0]} scale={[0.387, 0.666, 0.387]}>
                <mesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials['Material.012']} />
                <mesh name="Object_49" geometry={nodes.Object_49.geometry} material={materials['Material.013']} />
                <mesh name="Object_50" geometry={nodes.Object_50.geometry} material={materials['Material.014']} />
                <mesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials['Material.015']} />
                <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials['Material.016']} />
              </group>
              <group name="Cylinder007_8" position={[1.977, 1.66, -0.811]} rotation={[Math.PI / 2, -0.2, 0]} scale={[0.387, 0.666, 0.387]}>
                <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials['Material.012']} />
                <mesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials['Material.013']} />
                <mesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials['Material.014']} />
                <mesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials['Material.015']} />
                <mesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials['Material.016']} />
              </group>
              <group name="Cylinder008_9" position={[3.189, 1.66, -0.263]} rotation={[Math.PI / 2, -0.2, 0]} scale={[0.387, 0.666, 0.387]}>
                <mesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials['Material.012']} />
                <mesh name="Object_61" geometry={nodes.Object_61.geometry} material={materials['Material.013']} />
                <mesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials['Material.014']} />
                <mesh name="Object_63" geometry={nodes.Object_63.geometry} material={materials['Material.015']} />
                <mesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials['Material.016']} />
              </group>
              <group name="Cylinder009_10" position={[4.456, 1.66, 0.197]} rotation={[Math.PI / 2, -0.2, 0]} scale={[0.387, 0.666, 0.387]}>
                <mesh name="Object_66" geometry={nodes.Object_66.geometry} material={materials['Material.012']} />
                <mesh name="Object_67" geometry={nodes.Object_67.geometry} material={materials['Material.013']} />
                <mesh name="Object_68" geometry={nodes.Object_68.geometry} material={materials['Material.014']} />
                <mesh name="Object_69" geometry={nodes.Object_69.geometry} material={materials['Material.015']} />
                <mesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials['Material.016']} />
              </group>
              <group name="Cylinder030_1" position={[0.985, 0.434, 1.59]} rotation={[0, 0, Math.PI / 2]} scale={[-0.255, 0.07, 0.255]}>
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials['Material.024']} />
                <mesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cylinder017_2" position={[-0.27, 0.429, -1.508]} rotation={[0, 0, Math.PI / 2]} scale={[-0.255, 0.058, 0.255]}>
                <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials['Material.026']} />
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials['Material.027']} />
              </group>
              <group name="Cylinder018_3" position={[0.026, 1.022, -1.178]} rotation={[0.795, 0, 0]} scale={[0.084, 0.426, 0.084]}>
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.material_0} />
              </group>
              <group name="Cylinder076_4" position={[-0.8, 2.702, 1.118]} rotation={[1.584, -0.425, -1.574]} scale={[-0.132, 0.028, 0.134]}>
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials['Material.001']} />
                <mesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials['Material.007']} />
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials['Material.008']} />
                <mesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials['Material.002']} />
                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials['Material.003']} />
                <mesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials['Material.004']} />
                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials['Material.005']} />
                <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials['Material.021']} />
                <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials['Material.022']} />
                <mesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials['Material.023']} />
                <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials['Material.009']} />
                <mesh name="Object_29" geometry={nodes.Object_29.geometry} material={materials['Material.010']} />
                <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials['Material.011']} />
                <mesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials['Material.017']} />
                <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials['Material.018']} />
                <mesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials['Material.019']} />
                <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials['Material.020']} />
                <mesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials['Material.006']} />
                <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials['Material.028']} />
                <mesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials['Material.029']} />
                <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials['Material.030']} />
              </group>
              <group name="Cylinder019_5" position={[0.96, 2.702, 1.118]} rotation={[1.578, 0.39, -1.565]} scale={[-0.132, 0.028, 0.134]}>
                <mesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials['Material.001']} />
              </group>
              <group name="Cylinder020_11" position={[0.197, 0.434, 1.59]} rotation={[0, 0, Math.PI / 2]} scale={[-0.255, 0.07, 0.255]}>
                <mesh name="Object_72" geometry={nodes.Object_72.geometry} material={materials['Material.024']} />
                <mesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cylinder021_12" position={[-0.178, 0.434, 1.59]} rotation={[0, 0, Math.PI / 2]} scale={[-0.255, 0.07, 0.255]}>
                <mesh name="Object_75" geometry={nodes.Object_75.geometry} material={materials['Material.024']} />
                <mesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cylinder022_13" position={[-0.967, 0.434, 1.59]} rotation={[0, 0, Math.PI / 2]} scale={[-0.255, 0.07, 0.255]}>
                <mesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials['Material.024']} />
                <mesh name="Object_79" geometry={nodes.Object_79.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cylinder001_17" position={[4.456, 1.66, 0.332]} rotation={[Math.PI / 2, 0, 0]} scale={[0.404, 0.695, 0.404]}>
                <mesh name="Object_81" geometry={nodes.Object_81.geometry} material={materials['Material.012']} />
                <mesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials['Material.013']} />
                <mesh name="Object_83" geometry={nodes.Object_83.geometry} material={materials['Material.014']} />
                <mesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials['Material.015']} />
                <mesh name="Object_85" geometry={nodes.Object_85.geometry} material={materials['Material.016']} />
              </group>
              <group name="Cylinder002_18" position={[3.204, 1.66, -0.123]} rotation={[Math.PI / 2, 0, 0]} scale={[0.404, 0.695, 0.404]}>
                <mesh name="Object_87" geometry={nodes.Object_87.geometry} material={materials['Material.012']} />
                <mesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials['Material.013']} />
                <mesh name="Object_89" geometry={nodes.Object_89.geometry} material={materials['Material.014']} />
                <mesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials['Material.015']} />
                <mesh name="Object_91" geometry={nodes.Object_91.geometry} material={materials['Material.016']} />
              </group>
              <group name="Cylinder003_19" position={[1.976, 1.66, -0.691]} rotation={[Math.PI / 2, 0, 0]} scale={[0.404, 0.695, 0.404]}>
                <mesh name="Object_93" geometry={nodes.Object_93.geometry} material={materials['Material.012']} />
                <mesh name="Object_94" geometry={nodes.Object_94.geometry} material={materials['Material.013']} />
                <mesh name="Object_95" geometry={nodes.Object_95.geometry} material={materials['Material.014']} />
                <mesh name="Object_96" geometry={nodes.Object_96.geometry} material={materials['Material.015']} />
                <mesh name="Object_97" geometry={nodes.Object_97.geometry} material={materials['Material.016']} />
              </group>
              <group name="Cylinder010_20" position={[-1.939, 1.602, -0.62]} rotation={[Math.PI / 2, 0, 0]} scale={[0.404, 0.695, 0.404]}>
                <mesh name="Object_99" geometry={nodes.Object_99.geometry} material={materials['Material.012']} />
                <mesh name="Object_100" geometry={nodes.Object_100.geometry} material={materials['Material.013']} />
                <mesh name="Object_101" geometry={nodes.Object_101.geometry} material={materials['Material.014']} />
                <mesh name="Object_102" geometry={nodes.Object_102.geometry} material={materials['Material.015']} />
                <mesh name="Object_103" geometry={nodes.Object_103.geometry} material={materials['Material.016']} />
              </group>
              <group name="Cylinder011_21" position={[-3.184, 1.66, -0.171]} rotation={[Math.PI / 2, 0, 0]} scale={[0.404, 0.695, 0.404]}>
                <mesh name="Object_105" geometry={nodes.Object_105.geometry} material={materials['Material.012']} />
                <mesh name="Object_106" geometry={nodes.Object_106.geometry} material={materials['Material.013']} />
                <mesh name="Object_107" geometry={nodes.Object_107.geometry} material={materials['Material.014']} />
                <mesh name="Object_108" geometry={nodes.Object_108.geometry} material={materials['Material.015']} />
                <mesh name="Object_109" geometry={nodes.Object_109.geometry} material={materials['Material.016']} />
              </group>
              <group name="Cylinder012_22" position={[-4.491, 1.66, 0.271]} rotation={[Math.PI / 2, 0, 0]} scale={[0.404, 0.695, 0.404]}>
                <mesh name="Object_111" geometry={nodes.Object_111.geometry} material={materials['Material.012']} />
                <mesh name="Object_112" geometry={nodes.Object_112.geometry} material={materials['Material.013']} />
                <mesh name="Object_113" geometry={nodes.Object_113.geometry} material={materials['Material.014']} />
                <mesh name="Object_114" geometry={nodes.Object_114.geometry} material={materials['Material.015']} />
                <mesh name="Object_115" geometry={nodes.Object_115.geometry} material={materials['Material.016']} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/aeroplane.glb')
