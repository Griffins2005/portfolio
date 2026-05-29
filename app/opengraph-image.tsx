import { ImageResponse } from "next/og";
import { defaultDescription, siteName } from "@/lib/site";

export const alt = `${siteName} — Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #fafafa 0%, #f3f4f6 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#111827",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            GL
          </div>
          <span style={{ fontSize: "24px", color: "#6b7280" }}>Portfolio</span>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#111827",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          {siteName}
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#4b5563",
            lineHeight: 1.4,
            maxWidth: "820px",
          }}
        >
          Data Science · Full-Stack · AI · Blockchain
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: "20px",
            color: "#9ca3af",
            maxWidth: "820px",
          }}
        >
          {defaultDescription}
        </div>
      </div>
    ),
    { ...size }
  );
}
