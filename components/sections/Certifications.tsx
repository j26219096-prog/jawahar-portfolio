"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";
import { certifications } from "@/data/certifications";
import SectionHeader from "@/components/ui/SectionHeader";

const issuerColors: Record<string, string> = {
  "NPTEL / IIT Kharagpur": "#f59e0b",
  "AICTE + EduSkills + Google for Developers": "#22d3ee",
  "Tata / Forage": "#a78bfa",
  "IBM / Coursera": "#3b82f6",
  "Google Cloud": "#22d3ee",
  "EduSkills (Supported by Google Cloud)": "#22d3ee",
};

function getIssuerColor(issuer: string): string {
  for (const key of Object.keys(issuerColors)) {
    if (issuer.includes(key.split(" / ")[0]) || issuer.includes(key)) {
      return issuerColors[key] ?? "#8b949e";
    }
  }
  return "#8b949e";
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="container-xl">
        <SectionHeader
          label="Credentials"
          title="Certifications"
          subtitle="Verified certifications from IBM, Google Cloud, NPTEL, Tata, and AICTE."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => {
            const color = getIssuerColor(cert.issuer);
            return (
              <motion.div
                key={cert.id}
                className="glass-card p-5 flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Award size={17} style={{ color }} />
                </div>

                {/* Name */}
                <h3
                  className="font-semibold text-sm leading-snug break-words"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cert.name}
                </h3>

                <div className="flex items-start gap-1.5 mt-1">
                  <Building2 size={12} className="shrink-0 mt-0.5" style={{ color: "var(--text-muted)" }} />
                  <span className="text-xs break-words" style={{ color: "var(--text-muted)" }}>
                    {cert.issuer}
                  </span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} style={{ color: "var(--text-muted)" }} />
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {cert.date}
                  </span>
                </div>

                {/* Certificate ID */}
                {cert.certificateId && (
                  <p className="text-xs font-mono break-all mt-1" style={{ color: "var(--text-muted)" }}>
                    ID: {cert.certificateId}
                  </p>
                )}

                {/* Verify link */}
                {cert.verificationUrl && (
                  <div className="mt-auto pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs transition-colors hover:text-[var(--accent-cyan)]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <ExternalLink size={11} />
                      Verify Certificate
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
