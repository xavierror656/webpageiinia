'use client';

import { useEffect, useState, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

// Neural network points component
function NeuralPoints() {
  const ref = useRef<THREE.Points>(null);
  const { theme } = useTheme();

  // Generate neural network-like positions
  const positions = new Float32Array(500 * 3);
  for (let i = 0; i < 500; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={theme === 'dark' ? '#8C00FF' : '#450693'}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

// Main NeuralScene component with fallback
export function NeuralScene() {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldRender(!mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setShouldRender(!e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <NeuralPoints />
        </Suspense>
      </Canvas>
    </div>
  );
}
