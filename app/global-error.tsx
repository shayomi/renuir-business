"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          textAlign: "center",
          padding: "24px",
          background: "#ffffff",
          color: "#0b1220",
        }}
      >
        <h1 style={{ fontSize: 28, fontWeight: 600 }}>Something went wrong.</h1>
        <p style={{ marginTop: 8, color: "#6b7280" }}>
          Please refresh the page or try again.
        </p>
        <button
          onClick={() => reset()}
          style={{
            marginTop: 24,
            borderRadius: 9999,
            background: "#2438eb",
            color: "#fff",
            border: "none",
            padding: "10px 24px",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
