import { ReactNode } from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 flex flex-col ${centered ? "items-center text-center" : "items-start"}`}>
      <span
        className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 block"
        style={{ color: "var(--accent-cyan)" }}
      >
        {label}
      </span>
      <h2
        className="text-4xl sm:text-5xl font-heading font-bold mb-4 tracking-tight"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base max-w-2xl leading-relaxed"
          style={{
            color: "var(--text-secondary)",
            margin: centered ? "0 auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        className="section-divider mt-6"
        style={centered ? { margin: "0 auto" } : undefined}
      />
    </div>
  );
}
