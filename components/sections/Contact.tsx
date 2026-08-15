"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding flex flex-col justify-center items-center min-h-[60vh] w-full"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="container-xl w-full flex flex-col items-center justify-center">
        <div className="max-w-xl w-full flex flex-col items-center text-center">
          <SectionHeader
            label="Get In Touch"
            title="Open to Opportunities"
            subtitle="I'm actively seeking Data Engineering internships where I can contribute to real pipelines, scalable infrastructure, and data-driven products."
            centered
          />

          {/* Contact Buttons — stacked vertically for clean layout */}
          <motion.div
            className="flex flex-col w-full gap-3 mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
          >
            {/* Email — primary CTA */}
            <a
              href={`mailto:${profile.email}`}
              id="contact-email"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:brightness-105"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#ffffff",
              }}
            >
              <Mail size={16} />
              {profile.email}
            </a>

            {/* Secondary links row */}
            <div className="flex gap-3 w-full">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:brightness-110"
                style={{
                  background: "#0A66C2",
                  color: "#ffffff",
                }}
              >
                <LinkedInIcon size={15} />
                LinkedIn
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:brightness-125"
                style={{
                  background: "#1b1f23",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#ffffff",
                }}
              >
                <GitHubIcon size={15} />
                GitHub
              </a>

              <a
                href={profile.resumePath}
                download
                id="contact-resume"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:brightness-110"
                style={{
                  background: "rgba(105, 105, 138, 0.65)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "var(--text-black)",
                }}
              >
                <Download size={15} />
                Resume
              </a>
            </div>
          </motion.div>

          {/* Location note */}
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <MapPin size={13} style={{ color: "var(--text-muted)" }} />
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>
              {profile.location} · Open to remote &amp; hybrid internships
            </span>
          </motion.div>

          <motion.p
            className="mt-3 text-xs"
            style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Best reached via email or LinkedIn — I typically respond within 24 hours.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
