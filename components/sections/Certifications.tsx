"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Calendar, Building2, ChevronDown } from "lucide-react";
import { certifications } from "@/data/certifications";
import SectionHeader from "@/components/ui/SectionHeader";
import { useState } from "react";

// IDs of the 5 featured (always-visible) certifications
const FEATURED_IDS = [
  "google-cloud-da",
  "ibm-python-de",
  "ibm-intro-de",
  "aws-cloud-practitioner",
  "nptel-computer-arch",
];

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

const issuerDomains: Record<string, string> = {
  "Google": "google.com",
  "IBM": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "Amazon Web Services (AWS)": "aws.amazon.com",
  "Coursera": "coursera.org",
  "MongoDB": "mongodb.com",
  "Topengineers": "https://icon.horse/icon/topengineers.co.in",
  "EduSkills Foundation®": "eduskillsfoundation.org",
  "NPTEL": "https://icon.horse/icon/nptel.ac.in",
};

interface CertCardProps {
  cert: typeof certifications[0];
  index: number;
  featured?: boolean;
}

function CertCard({ cert, index, featured = false }: CertCardProps) {
  const themeColor = getIssuerColor(cert.issuer);
  const domainOrUrl = issuerDomains[cert.issuer];

  let logoSrc = "";
  if (domainOrUrl) {
    logoSrc = domainOrUrl.startsWith("http")
      ? domainOrUrl
      : `https://www.google.com/s2/favicons?domain=${domainOrUrl}&sz=128`;
  }

  return (
    <motion.div
      key={cert.id}
      className="glass-card p-5 flex flex-col gap-3"
      style={featured ? { border: `1px solid ${themeColor}35` } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
    >
      {/* Icon / Logo */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-white"
        style={{ border: `1px solid ${themeColor}30` }}
      >
        {logoSrc ? (
          <img
            src={logoSrc}
            alt={cert.issuer}
            className="w-7 h-7 object-contain rounded-sm"
          />
        ) : (
          <Award size={18} style={{ color: themeColor }} />
        )}
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
        <div className="mt-auto pt-3">
          <a
            href={cert.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-colors hover:bg-white/5"
            style={{
              color: "var(--text-secondary)",
              border: "1px solid var(--border-hover)",
            }}
          >
            Show credential
            <ExternalLink size={14} />
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default function Certifications() {
  const [showAdditional, setShowAdditional] = useState(false);

  const featured = certifications.filter((c) => FEATURED_IDS.includes(c.id));
  const additional = certifications.filter((c) => !FEATURED_IDS.includes(c.id));

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
          subtitle="Verified certifications from IBM, Google Cloud, AWS, and NPTEL."
        />

        {/* Featured — always visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} featured />
          ))}
        </div>

        {/* Toggle button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAdditional((v) => !v)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/8"
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              color: "var(--text-muted)",
            }}
          >
            {showAdditional
              ? `Hide additional certifications`
              : `+ ${additional.length} additional certifications`}
            <motion.span
              animate={{ rotate: showAdditional ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="inline-flex"
            >
              <ChevronDown size={15} />
            </motion.span>
          </button>
        </div>

        {/* Additional — collapsible */}
        <AnimatePresence>
          {showAdditional && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {additional.map((cert, i) => (
                  <CertCard key={cert.id} cert={cert} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
