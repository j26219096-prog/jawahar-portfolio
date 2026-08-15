"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Award, Code2, X, ExternalLink } from "lucide-react";
import { experiences } from "@/data/experience";
import SectionHeader from "@/components/ui/SectionHeader";

const typeIcon: Record<string, React.ReactNode> = {
  internship: <Briefcase size={16} />,
  project: <Code2 size={16} />,
  hackathon: <Award size={16} />,
};

const typeColor: Record<string, string> = {
  internship: "var(--accent-cyan)",
  project: "var(--accent-cyan)",
  hackathon: "var(--accent-cyan)",
};

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section
      id="experience"
      className="section-padding"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="container-xl">
        <SectionHeader
          label="Background"
          title="Experience"
          subtitle="Internships, projects, and self-directed work in Data Engineering and AI."
        />

        <div className="relative">

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="flex gap-5"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
              >
                {/* Icon node */}
                <div className="relative shrink-0 flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center z-10"
                    style={{
                      background: `${typeColor[exp.type]}18`,
                      border: `1.5px solid ${typeColor[exp.type]}55`,
                      color: typeColor[exp.type],
                    }}
                  >
                    {typeIcon[exp.type]}
                  </div>
                  {/* Line segment to next item */}
                  {i !== experiences.length - 1 && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-12 bottom-[-2rem] w-px"
                      style={{
                        background: "linear-gradient(to bottom, var(--accent-cyan) 0%, var(--accent-purple) 100%)",
                        opacity: 0.3
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className="glass-card p-5 flex-1 flex flex-col items-start"
                >
                  {/* Period badge */}
                  <span
                    className="inline-block text-xs px-2 py-0.5 rounded mb-2"
                    style={{
                      background: `${typeColor[exp.type]}15`,
                      color: typeColor[exp.type],
                    }}
                  >
                    {exp.period}
                  </span>

                  <h3
                    className="font-bold text-base mb-0.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {exp.organization}
                  </p>

                  {exp.badge && (
                    <div
                      className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full mb-3"
                      style={{
                        background: "rgba(34,211,238,0.1)",
                        border: "1px solid rgba(34,211,238,0.2)",
                        color: "var(--accent-cyan)",
                      }}
                    >
                      <Award size={11} />
                      {exp.badge}
                    </div>
                  )}

                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {exp.description}
                  </p>

                  <ul className="flex flex-col gap-1.5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-sm flex items-start gap-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          className="mt-2 w-1 h-1 rounded-full shrink-0"
                          style={{ background: typeColor[exp.type] }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full border-t border-white/5 pt-4">
                    {exp.certificateId ? (
                      <p
                        className="text-xs font-mono"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Certificate ID: {exp.certificateId}
                      </p>
                    ) : (
                      <div />
                    )}

                    {exp.certificateImage && (
                      <button
                        onClick={() => setSelectedCert(exp.certificateImage!)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:brightness-110 ml-auto sm:ml-0"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid var(--border)",
                          color: "var(--text-primary)",
                        }}
                      >
                        <Award size={15} />
                        View Certificate
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden border border-white/10 bg-[#080c14] flex items-center justify-center"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors z-10 border border-white/10"
              >
                <X size={20} />
              </button>
              {selectedCert.toLowerCase().endsWith(".pdf") ? (
                <iframe
                  src={selectedCert}
                  title="Certificate"
                  className="w-full h-[80vh] rounded-lg bg-white"
                />
              ) : (
                <img
                  src={selectedCert}
                  alt="Certificate"
                  className="w-full h-full object-contain max-h-[90vh]"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
