"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronRight, Folder } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { projects, Project } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import { useState } from "react";

function ProjectFolder({ project, isOpen, onToggle, index }: { project: Project; isOpen: boolean; onToggle: () => void; index: number }) {
  return (
    <motion.div
      className="glass-card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Folder Header (Clickable) */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/5"
      >
        <div className="flex items-center gap-4">
          <Folder className="text-white/50" size={24} />
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-gray-400 text-xs md:text-sm mt-1">{project.period}</p>
          </div>
        </div>
        <div className="text-gray-400 shrink-0 ml-4">
          {isOpen ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
        </div>
      </button>

      {/* Folder Content (Expandable) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-5 md:p-6 border-t border-white/10">
              <p className="text-white font-medium mb-4">{project.shortDescription}</p>

              <div className="flex flex-col gap-3 mb-6">
                {project.description.map((desc, i) => (
                  <p key={i} className="text-sm text-gray-300 leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg text-sm text-white hover:bg-white/10 transition-colors"
                  >
                    <GitHubIcon size={16} />
                    View Source
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white/80 rounded-lg text-sm border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Project
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const [openProjectId, setOpenProjectId] = useState<string | null>(projects[0]?.id || null);

  const handleToggle = (id: string) => {
    setOpenProjectId(openProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="section-padding" style={{ background: "var(--bg-surface)" }}>
      <div className="container-xl px-4 mx-auto max-w-4xl">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          subtitle="Real-world data engineering and AI projects — built, deployed, and documented."
        />

        <div className="mt-12 flex flex-col gap-6">
          {projects.map((project, i) => (
            <ProjectFolder
              key={project.id}
              project={project}
              isOpen={openProjectId === project.id}
              onToggle={() => handleToggle(project.id)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
