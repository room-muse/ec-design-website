import React from "react";

export default function DemoAR() {
  const params = new URLSearchParams(window.location.search);
  const company = params.get("company") || "";
  const arId = params.get("rm_arId") || "";
  const parentUrl = encodeURIComponent(window.location.href);
  
  let src = `https://furniture-store-frontend-sooty.vercel.app/index-with-ar.html?company=${company}&rm_parentUrl=${parentUrl}`;
  if (arId) src += `&rm_arId=${arId}`;

  return (
    <iframe src={src} style={{ width: "100%", height: "100vh", border: "none" }} />
  );
}