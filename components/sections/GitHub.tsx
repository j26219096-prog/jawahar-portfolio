"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import SectionHeader from "@/components/ui/SectionHeader";

export default function GitHubSection() {
  const repoProjects = projects.filter((p) => p.repoUrl);

  return (
    <section
      id="github"
      className="section-padding"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="container-xl">
        <SectionHeader
          label="Open Source"
          title="GitHub / Building in Public"
          subtitle="Selected repositories — real projects built and deployed."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {repoProjects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.repoUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex flex-col gap-3 cursor-pointer h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 shrink-0 bg-white rounded flex items-center justify-center shadow-sm">
                    <GitHubIcon size={14} className="text-[#171515]" />
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </span>
                </div>
                <ExternalLink size={14} style={{ color: "var(--text-muted)" }} />
              </div>

              <p
                className="text-sm leading-relaxed mb-4 line-clamp-2"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.techStack.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="w-full h-8 bg-transparent" />

        {/* Profile link */}
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 glass-card p-5 mt-10 cursor-pointer hover:bg-white/5 transition-colors duration-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-white shadow-sm"
              style={{
                border: "1px solid var(--border)",
              }}
            >
              <GitHubIcon size={22} className="text-[#171515]" />
            </div>
            <div>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                j26219096-prog
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                {profile.github}
              </p>
            </div>
          </div>
          <div className="sm:ml-auto">
            <span
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
              }}
            >
              <GitHubIcon size={15} />
              View Full Profile
            </span>
          </div>
        </motion.div>
        </a>
      </div>
    </section>
  );
}
