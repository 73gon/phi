import MetallicPaint, { parseLogoImage } from './MetallicPaint';
import { useState, useEffect } from 'react';

import logo from '../../assets/phi.svg';

export default function Logo() {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        const response = await fetch(logo);
        const blob = await response.blob();
        const file = new File([blob], 'default.png', { type: blob.type });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);
      } catch (err) {
        console.error('Error loading default image:', err);
      }
    }

    loadDefaultImage();
  }, []);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <MetallicPaint imageData={imageData ?? new ImageData(1, 1)} params={{ edge: 0, patternBlur: 0.1, patternScale: 5, refraction: 0.015, speed: 0.3, liquid: 1 }} />
    </div>
  );
}
