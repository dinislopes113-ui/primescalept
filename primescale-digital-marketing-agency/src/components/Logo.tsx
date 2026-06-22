interface LogoMarkProps {
  size?: number;
}

function LogoMark({ size = 36 }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Three ascending bars, bottoms aligned at y=35 */}
      <rect x="1"  y="24" width="7" height="11" rx="1.5" fill="#3b82f6" fillOpacity="0.4" />
      <rect x="10" y="16" width="7" height="19" rx="1.5" fill="#3b82f6" fillOpacity="0.7" />
      <rect x="19" y="8"  width="7" height="27" rx="1.5" fill="#2563eb" />

      {/* Arrow shaft: lower-left to upper-right */}
      <path d="M3 22 L25 5" stroke="white" strokeWidth="2" strokeLinecap="round" />

      {/* Arrow corner (L-shape at tip) */}
      <path d="M18 3 H28 V13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface LogoFullProps {
  iconSize?: number;
  textSize?: string;
}

export function LogoFull({ iconSize = 36, textSize = 'text-[17px]' }: LogoFullProps) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={iconSize} />
      <span className={`font-bold ${textSize} tracking-tight text-white leading-none`}>
        Prime<span className="text-blue-500">Scale</span>
      </span>
    </span>
  );
}

export function LogoCompact({ size = 30 }: { size?: number }) {
  return <LogoMark size={size} />;
}
