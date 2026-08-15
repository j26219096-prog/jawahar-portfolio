"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Target,
  Database,
  Mail,
  Download,
  Sparkles,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import SectionHeader from "@/components/ui/SectionHeader";

const focusAreas = [
  "ETL & Data Pipelines",
  "Real-Time Ingestion",
  "FastAPI & Serving Layers",
  "Cloud Data Engineering",
  "Data Quality & Testing",
  "Distributed Processing",
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function About() {
  const { education, summary } = profile;

  return (
    <section id="about" className="section-padding" style={{ background: "var(--bg-surface)" }}>
      <div className="container-xl">
        <SectionHeader
          label="Background"
          title="About Me"
          subtitle="Building production-grade data systems — from ingestion to insight."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* LEFT: Story + Focus + Languages */}
          <motion.div
            className="lg:col-span-3 flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-70px" }}
          >
            {/* Summary */}
            <motion.div custom={0} variants={fadeIn}>
              <p
                className="text-base leading-[1.9] tracking-wide"
                style={{ color: "var(--text-secondary)" }}
              >
                {summary}
              </p>
            </motion.div>

            {/* Focus Areas */}
            <motion.div custom={1} variants={fadeIn}>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Areas of Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((label) => (
                  <span key={label} className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-400 bg-white/5 border border-white/10">
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Currently Exploring */}
            <motion.div custom={2} variants={fadeIn}>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Currently Exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.currentlyExploring.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-400 bg-white/5 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div custom={3} variants={fadeIn}>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Languages
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((l) => (
                  <div
                    key={l.language}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                      {l.language}
                    </span>
                    <span
                      className="text-xs px-1.5 py-0.5 rounded"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {l.level}
                    </span>
                    {l.note && (
                      <span className="text-xs hidden sm:inline" style={{ color: "var(--text-muted)" }}>
                        · {l.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Profile Card */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card p-6 sticky top-24 flex flex-col gap-6">

              {/* Header */}
              <div className="flex items-center gap-3 pb-5" style={{ borderBottom: "1px solid var(--border)" }}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shrink-0 bg-white/10 border border-white/20 text-gray-200"
                >
                  J
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                    {profile.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {profile.headline}
                  </p>
                </div>
              </div>

              {/* Education Details */}
              <div className="flex flex-col gap-4">
                {[
                  { icon: <GraduationCap size={15} />, label: "Degree", value: education.degree },
                  { icon: <Target size={15} />, label: "College", value: education.college },
                  { icon: <Calendar size={15} />, label: "Period", value: education.period },
                  { icon: <MapPin size={15} />, label: "Location", value: profile.location },
                  { icon: <Database size={15} />, label: "Focus", value: education.focus },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="group flex items-start gap-4 p-4 rounded-xl transition-colors duration-200 hover:bg-white/[0.03]"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-white/5 text-gray-400 border border-white/10"
                    >
                      {row.icon}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "var(--text-muted)" }}>
                        {row.label}
                      </p>
                      <p className="text-sm font-medium leading-snug" style={{ color: "var(--text-primary)" }}>
                        {row.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-2 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium leading-snug transition-all duration-200 hover:brightness-110"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <Mail size={15} className="shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium leading-snug transition-all duration-200 hover:brightness-110"
                  style={{
                    background: "#0A66C2",
                    color: "#ffffff",
                  }}
                >
                  <LinkedInIcon size={15} className="shrink-0" />
                  LinkedIn
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium leading-snug transition-all duration-200 hover:brightness-125"
                  style={{
                    background: "#1b1f23",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#ffffff",
                  }}
                >
                  <GitHubIcon size={15} className="shrink-0" />
                  GitHub
                </a>

                <a
                  href={profile.resumePath}
                  download
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium leading-snug transition-all duration-200 hover:brightness-110"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "var(--text-primary)",
                  }}
                >
                  <Download size={15} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
