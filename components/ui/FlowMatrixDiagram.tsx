export default function FlowMatrixDiagram() {
  const stages = [
    {
      icon: "⚡",
      label: "Source",
      sublabel: "Order Events\n(Simulated)",
    },
    {
      icon: "📨",
      label: "Apache Kafka",
      sublabel: "Stream Ingestion\nConsumer Groups",
    },
    {
      icon: "🔥",
      label: "PySpark",
      sublabel: "Transform\nClean · Enrich",
    },
    {
      icon: "🌊",
      label: "Airflow + dbt",
      sublabel: "Orchestration\nDAG Scheduling",
    },
    {
      icon: "🗄️",
      label: "PostgreSQL",
      sublabel: "Neon Serverless\nWarehouse",
    },
    {
      icon: "📊",
      label: "Streamlit",
      sublabel: "Dashboard\nGMV · Freshness",
    },
  ];

  return (
    <div
      className="w-full rounded-xl p-5 mt-4 overflow-x-auto"
      style={{
        background: "rgba(0,0,0,0.35)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <p className="text-xs font-mono mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
        # FlowMatrix — Pipeline Architecture
      </p>

      {/* Pipeline flow */}
      <div className="flex items-center gap-1 min-w-max">
        {stages.map((stage, i) => (
          <div key={stage.label} className="flex items-center gap-1">
            {/* Stage box */}
            <div
              className="flex flex-col items-center gap-1 px-3 py-2.5 rounded-lg text-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                minWidth: "90px",
              }}
            >
              <span className="text-lg">{stage.icon}</span>
              <span
                className="text-xs font-semibold leading-tight"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {stage.label}
              </span>
              <span
                className="text-[10px] leading-tight whitespace-pre-line"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {stage.sublabel}
              </span>
            </div>

            {/* Arrow */}
            {i < stages.length - 1 && (
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                <line
                  x1="0" y1="6" x2="18" y2="6"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="1.5"
                />
                <polyline
                  points="14,2 20,6 14,10"
                  fill="none"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Data Quality bar */}
      <div className="mt-3 flex items-center gap-2">
        <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
        <span
          className="text-[10px] font-mono px-2 py-0.5 rounded"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          ✓ Great Expectations — Data Quality Contracts
        </span>
        <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
      </div>

      {/* Tech badges row */}
      <div className="flex flex-wrap gap-1.5 mt-3">
        {["Docker", "GitHub Actions CI/CD", "Neon PostgreSQL (serverless)", "Streamlit Cloud"].map((t) => (
          <span
            key={t}
            className="text-[10px] px-2 py-0.5 rounded-full font-mono"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
