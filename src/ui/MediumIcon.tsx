// MediumIcon.tsx
import { forwardRef } from "react";
import { LucideProps } from "lucide-react";

export const MediumIcon = forwardRef<SVGSVGElement, LucideProps>(
  ({ color = "currentColor", size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 1043.63 592.71"
      fill={color}
      {...props}
    >
      <path d="M588.67 296.35c0 163.74-131.64 296.35-294.34 296.35C131.64 592.7 0 460.09 0 296.35 0 132.61 131.64 0 294.33 0c162.7 0 294.34 132.61 294.34 296.35zM919.45 296.35c0 154.01-65.82 278.94-147.17 278.94-81.35 0-147.17-124.93-147.17-278.94S690.93 17.41 772.28 17.41c81.35 0 147.17 124.93 147.17 278.94zM1043.63 296.35c0 138.05-23.36 249.95-52.17 249.95-28.8 0-52.17-111.9-52.17-249.95s23.36-249.95 52.17-249.95c28.8 0 52.17 111.9 52.17 249.95z" />
    </svg>
  )
);

MediumIcon.displayName = "MediumIcon";
