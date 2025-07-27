import React from 'react';

export default function Phi(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="48" fontFamily="serif" fill="white">
      φ
      </text>
    </svg>
  );
}
