import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Track(props) {
  const { nodes, materials } = useGLTF('/road19.glb')
  return (
    <group position={[0,-.1,0]} {...props} dispose={null}>
      <group position={[-121.932, 5.417, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.075}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[175.707, 0.958, -28.018]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Starting_Line_Start_Texture_0.geometry}
                material={materials.Start_Texture}
                position={[-175.707, 1436.989, 94.565]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Starting_Line_Start_Texture_0001.geometry}
                material={materials.Start_Texture}
                position={[-175.707, 1441.279, 94.565]}
                rotation={[0, 0, -Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Starting_Line_Starting_Sign_Mat_1_0.geometry}
                material={materials.Starting_Sign_Mat_1}
                position={[0, 1439.384, 1.775]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Starting_Line_Starting_Sign_Mat_2_0.geometry}
                material={materials.Starting_Sign_Mat_2}
                position={[0, 1439.384, 2.667]}
              />
            </group>
          </group>
        </group>
      </group>
      <group position={[0, 0.105, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0.005, 0, 0.036]}>
          <group position={[185.829, -112.243, -0.159]} scale={1.656}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2009_1.geometry}
              material={materials['Material.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2009_2.geometry}
              material={materials.Orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2009_3.geometry}
              material={materials.ReflectiveWhite}
            />
          </group>
          <group position={[192.231, -114.021, -0.159]} scale={1.656}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2016.geometry}
              material={materials['Material.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2016_1.geometry}
              material={materials.Orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2016_2.geometry}
              material={materials.ReflectiveWhite}
            />
          </group>
          <group position={[182.273, -120.423, -0.159]} scale={1.656}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2017.geometry}
              material={materials['Material.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2017_1.geometry}
              material={materials.Orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2017_2.geometry}
              material={materials.ReflectiveWhite}
            />
          </group>
          <group position={[60.961, -174.48, -0.523]} scale={1.656}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2004_1.geometry}
              material={materials['Material.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2004_2.geometry}
              material={materials.Orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2004_3.geometry}
              material={materials.ReflectiveWhite}
            />
          </group>
          <group position={[213.569, -23.745, -0.159]} scale={1.656}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2018.geometry}
              material={materials['Material.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2018_1.geometry}
              material={materials.Orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2018_2.geometry}
              material={materials.ReflectiveWhite}
            />
          </group>
          <group position={[210.013, -27.301, -0.159]} scale={1.656}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2020.geometry}
              material={materials['Material.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2020_1.geometry}
              material={materials.Orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2020_2.geometry}
              material={materials.ReflectiveWhite}
            />
          </group>
          <group position={[27.789, 32.464, -0.374]} scale={1.656}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2021.geometry}
              material={materials['Material.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2021_1.geometry}
              material={materials.Orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2021_2.geometry}
              material={materials.ReflectiveWhite}
            />
          </group>
          <group position={[18.898, 38.155, -0.374]} scale={1.656}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2024.geometry}
              material={materials['Material.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2024_1.geometry}
              material={materials.Orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2024_2.geometry}
              material={materials.ReflectiveWhite}
            />
          </group>
          <group position={[220.58, 23.53, -0.523]} rotation={[0, 0, 0.81]} scale={1.656}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2026.geometry}
              material={materials['Material.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2026_1.geometry}
              material={materials.Orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2026_2.geometry}
              material={materials.ReflectiveWhite}
            />
          </group>
          <group position={[230.956, 21.018, -0.523]} rotation={[0, 0, 0.81]} scale={1.656}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2028.geometry}
              material={materials['Material.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2028_1.geometry}
              material={materials.Orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2028_2.geometry}
              material={materials.ReflectiveWhite}
            />
          </group>
          <group position={[223.721, 18.576, -0.523]} rotation={[0, 0, 0.81]} scale={1.656}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2036.geometry}
              material={materials['Material.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2036_1.geometry}
              material={materials.Orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2036_2.geometry}
              material={materials.ReflectiveWhite}
            />
          </group>
          <group position={[-31.047, -85.869, -0.298]} scale={1.656}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2027_1.geometry}
              material={materials['Material.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2027_2.geometry}
              material={materials.Orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2027_3.geometry}
              material={materials.ReflectiveWhite}
            />
          </group>
          <group
            position={[-49.909, -24.471, 0.036]}
            rotation={[-1.831, -0.366, -1.666]}
            scale={1.656}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2035_1.geometry}
              material={materials['Material.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2035_2.geometry}
              material={materials.Orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2035_3.geometry}
              material={materials.ReflectiveWhite}
            />
          </group>
        </group>
      </group>
      <group position={[0, 0.105, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0.001, 0.002, 0.005]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Tyrewall-material'].geometry}
            material={materials.Tyrewall}
            position={[-105.185, 154.733, 1.143]}
            rotation={[0, 0, -0.774]}
            scale={2.613}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Tyrewall-material001'].geometry}
            material={materials.Tyrewall}
            position={[-101.156, 155.579, 1.104]}
            rotation={[0, 0, -0.774]}
            scale={2.613}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Tyrewall-material006'].geometry}
            material={materials.Tyrewall}
            position={[22.641, -171.749, 0.755]}
            rotation={[0, 0, -2.829]}
            scale={2.613}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve.geometry}
        material={materials.concrete}
        position={[-110.386, 0.504, 161.996]}
        scale={33.922}
      />
      <group position={[39.311, 0.113, -57.419]} rotation={[-1.562, 0, -1.582]} scale={57.826}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4004.geometry}
          material={materials.material_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4004_1.geometry}
          material={materials['Material.003']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials['Material.002']}
        position={[-4.92, -0.394, -0.439]}
        scale={765.9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={materials.Material}
        position={[179.466, -0.027, 93.623]}
        scale={80.555}
      />
      <group
        position={[52.446, -0.143, -255.829]}
        rotation={[Math.PI, -1.429, Math.PI]}
        scale={[1, 0.18, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group
        position={[219.366, -0.143, 26.329]}
        rotation={[-Math.PI, 0.934, -Math.PI]}
        scale={[1, 0.18, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group position={[99.362, -0.143, 83.09]} rotation={[0, 1.453, 0]} scale={[1, 0.18, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_2.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group position={[-98.346, -0.143, 62.218]} rotation={[0, -0.792, 0]} scale={[1, 0.18, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_2.geometry}
          material={materials['Material.004']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.005']}
        position={[28.965, -0.223, -47.27]}
        scale={33.751}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_1.geometry}
        material={materials['Material.005']}
        position={[-35.46, -0.212, -194.632]}
        rotation={[Math.PI, -1.516, Math.PI]}
        scale={33.751}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials.Material}
        position={[-35.668, -0.012, -184.538]}
        scale={80.555}
      />
      <group position={[-98.346, -0.143, 32.286]} rotation={[0, -0.792, 0]} scale={[1, 0.18, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_2.geometry}
          material={materials['Material.007']}
        />
      </group>
      <group position={[-98.346, -0.143, 89.643]} rotation={[0, -0.792, 0]} scale={[1, 0.18, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_2.geometry}
          material={materials['Material.007']}
        />
      </group>
      <group position={[-98.346, -0.143, 118.003]} rotation={[0, -0.792, 0]} scale={[1, 0.18, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_2.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group position={[-98.346, -0.143, 144.25]} rotation={[0, -0.792, 0]} scale={[1, 0.18, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_2.geometry}
          material={materials['Material.007']}
        />
      </group>
      <group position={[-98.346, -0.143, 1.621]} rotation={[0, -0.792, 0]} scale={[1, 0.18, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_2.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group position={[-98.346, -0.143, -29.096]} rotation={[0, -0.792, 0]} scale={[1, 0.18, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_2.geometry}
          material={materials['Material.007']}
        />
      </group>
      <group
        position={[50.481, -0.143, 210.631]}
        rotation={[-Math.PI, 1.077, -Math.PI]}
        scale={[1, 0.18, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_2.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group
        position={[40.911, -0.143, -27.296]}
        rotation={[Math.PI, -0.082, Math.PI]}
        scale={[1, 0.18, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_2.geometry}
          material={materials['Material.007']}
        />
      </group>
      <group
        position={[172.605, -0.143, 72.931]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 0.18, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_2.geometry}
          material={materials['Material.007']}
        />
      </group>
      <group position={[290.346, 20.174, -66.453]} scale={0.522}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_1.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_2.geometry}
          material={materials['Material.011']}
        />
      </group>
      <group position={[120.835, 20.174, 219.547]} rotation={[0, -Math.PI / 2, 0]} scale={0.522}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_1.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_2.geometry}
          material={materials['Material.011']}
        />
      </group>
      <group position={[48.931, 20.174, -304.223]} rotation={[0, 0.843, 0]} scale={0.522}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_1.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_2.geometry}
          material={materials['Material.011']}
        />
      </group>
      <group position={[-3.788, -0.143, -247.096]} rotation={[0, -0.199, 0]} scale={[1, 0.18, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_2.geometry}
          material={materials['Material.007']}
        />
      </group>
      <group
        position={[-23.111, 0.032, -161.662]}
        rotation={[Math.PI, -1.372, Math.PI]}
        scale={[1, 0.18, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_1.geometry}
          material={materials['Material.007']}
        />
      </group>
      <group position={[235.406, -0.143, -67.355]} rotation={[0, -1.4, 0]} scale={[1, 0.18, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_1.geometry}
          material={materials['Material.007']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials['Material.012']}
        position={[-21.057, -0.123, 64.941]}
        scale={44.453}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials['Material.005']}
        position={[-126.187, 0.067, 192.961]}
        scale={58.629}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCircle.geometry}
        material={materials['Material.006']}
        position={[0, 17.716, 0]}
        scale={739.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve006.geometry}
        material={materials.concrete}
        position={[-99.594, -2.404, 0]}
        scale={64.478}
      />
    </group>
  )
}

useGLTF.preload('/road19.glb')
