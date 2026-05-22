import { ImageResponse } from "next/og";

export const alt = "Mohammed Farhan K C — Python Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 88px",
        background:
          "radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.18), transparent 55%), radial-gradient(circle at 80% 80%, rgba(56, 189, 248, 0.18), transparent 55%), #0a0a0a",
        fontFamily: "sans-serif",
        color: "#fafafa",
      }}
    >
      <div
        style={{
          fontSize: 36,
          fontWeight: 800,
          letterSpacing: "-0.02em",
          backgroundImage: "linear-gradient(90deg, #a855f7, #38bdf8)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        FKC.
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <div
          style={{
            fontSize: 26,
            color: "#a855f7",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Python Full Stack Developer
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          Mohammed Farhan K C
        </div>

        <div
          style={{
            fontSize: 30,
            color: "#a3a3a3",
            lineHeight: 1.35,
            maxWidth: 980,
            fontWeight: 400,
          }}
        >
          Crafting scalable web apps with Python, FastAPI, Django, React &
          Next.js.
        </div>
      </div>

      <div style={{ display: "flex", gap: 14 }}>
        {["FastAPI", "Django", "Odoo", "React", "Next.js"].map((tag) => (
          <div
            key={tag}
            style={{
              fontSize: 22,
              padding: "10px 22px",
              borderRadius: 999,
              border: "1px solid rgba(168, 85, 247, 0.35)",
              background: "rgba(168, 85, 247, 0.12)",
              color: "#e5e7eb",
              fontWeight: 500,
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>,
    { ...size },
  );
}
