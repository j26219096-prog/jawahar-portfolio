"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Rocket, Cloud } from "lucide-react";
import { achievements } from "@/data/achievements";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ReactNode> = {
  trophy: <Trophy size={22} />,
  award: <Award size={22} />,
  rocket: <Rocket size={22} />,
  cloud: <Cloud size={22} />,
};

const iconColors = [
  { fg: "var(--accent-cyan)", bg: "var(--accent-cyan-dim)", border: "rgba(34,211,238,0.2)" },
  { fg: "var(--accent-cyan)", bg: "var(--accent-cyan-dim)", border: "rgba(34,211,238,0.2)" },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="container-xl">
        <SectionHeader
          label="Recognition"
          title="Achievements"
          subtitle="Hackathon wins, certifications, and deployed projects — built and shipped."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => {
            const col = iconColors[i % iconColors.length];
            return (
              <motion.div
                key={a.id}
                className="glass-card p-6 flex gap-4 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: col.bg,
                    border: `1px solid ${col.border}`,
                    color: col.fg,
                  }}
                >
                  {iconMap[a.icon]}
                </div>
                <div>
                  <h3
                    className="font-bold text-sm mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {a.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mt-2 mb-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {a.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
