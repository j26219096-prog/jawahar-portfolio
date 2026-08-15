"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layers, Cpu, Wrench, BookOpen } from "lucide-react";
import { skillGroups, exploringSkills } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 size={18} />,
  layers: <Layers size={18} />,
  database: <Database size={18} />,
  cpu: <Cpu size={18} />,
  tool: <Wrench size={18} />,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: "var(--bg-base)" }}>
      <div className="container-xl">
        <SectionHeader
          label="Technical Profile"
          title="Skills"
          subtitle="Technologies I use to design, build, and ship data systems and applications."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="glass-card p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ delay: gi * 0.08, duration: 0.4 }}
            >
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: "var(--accent-cyan-dim)",
                    color: "var(--accent-cyan)",
                  }}
                >
                  {iconMap[group.icon]}
                </div>
                <h3
                  className="font-semibold text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="tag-chip"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          {/* Currently Exploring */}
          <motion.div
            className="glass-card p-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 5 * 0.08 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "var(--accent-cyan-dim)",
                  color: "var(--accent-cyan)",
                }}
              >
                <BookOpen size={18} />
              </div>
              <div>
                <h3
                  className="font-semibold text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  Currently Exploring
                </h3>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  Actively learning right now
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {exploringSkills.map((skill) => (
                <span
                  key={skill}
                  className="tag-chip"
                  style={{
                    background: "var(--accent-cyan-dim)",
                    borderColor: "rgba(34,211,238,0.2)",
                    color: "var(--accent-cyan)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
