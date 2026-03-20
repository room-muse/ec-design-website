import React from "react";

export default function Demo() {
  const params = new URLSearchParams(window.location.search);
  const company = params.get("company") || "";
  const src = `https://furniture-store-frontend-sooty.vercel.app/index-with-ar.html?company=${company}&rm_parentUrl=${encodeURIComponent(window.location.href)}`;
  return (
    <iframe src={src} style={{ width: "100%", height: "100vh", border: "none" }} />
  );
}
