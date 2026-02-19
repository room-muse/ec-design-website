import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "vaul@1.1.2": "vaul",
      "sonner@2.0.3": "sonner",
      "recharts@2.15.2": "recharts",
      "react-resizable-panels@2.1.7": "react-resizable-panels",
      "react-hook-form@7.55.0": "react-hook-form",
      "react-day-picker@8.10.1": "react-day-picker",
      "next-themes@0.4.6": "next-themes",
      "lucide-react@0.487.0": "lucide-react",
      "input-otp@1.4.2": "input-otp",
      "figma:asset/d6d48e9265cdae5b34f9a28835dee497fd515fd9.png": path.resolve(
        __dirname,
        "./src/assets/d6d48e9265cdae5b34f9a28835dee497fd515fd9.png",
      ),
      "figma:asset/bb1c5a7c71e6354b3765279a0ccfc4f2af0e4ced.png": path.resolve(
        __dirname,
        "./src/assets/bb1c5a7c71e6354b3765279a0ccfc4f2af0e4ced.png",
      ),
      "figma:asset/b2bcfd473c78e0b613c49d368bae09322ddfbdb7.png": path.resolve(
        __dirname,
        "./src/assets/b2bcfd473c78e0b613c49d368bae09322ddfbdb7.png",
      ),
      "figma:asset/9eb474bcb37a08419246973b1550a8767ab3d898.png": path.resolve(
        __dirname,
        "./src/assets/9eb474bcb37a08419246973b1550a8767ab3d898.png",
      ),
      "figma:asset/95a363c49e89da6c03503e9c01a253adf48b2577.png": path.resolve(
        __dirname,
        "./src/assets/95a363c49e89da6c03503e9c01a253adf48b2577.png",
      ),
      "figma:asset/807591418c19cb0a900d3773136b75a500fb4557.png": path.resolve(
        __dirname,
        "./src/assets/807591418c19cb0a900d3773136b75a500fb4557.png",
      ),
      "figma:asset/699bdcf8c3bd95b5fc88a48f24d741fa6316424b.png": path.resolve(
        __dirname,
        "./src/assets/699bdcf8c3bd95b5fc88a48f24d741fa6316424b.png",
      ),
      "figma:asset/43901ceb0e7066b32dd06ffafe7bb1185568bf59.png": path.resolve(
        __dirname,
        "./src/assets/43901ceb0e7066b32dd06ffafe7bb1185568bf59.png",
      ),
      "figma:asset/431ccf0e96957ca3dcb4f9912f2ae9a9d83e6583.png": path.resolve(
        __dirname,
        "./src/assets/431ccf0e96957ca3dcb4f9912f2ae9a9d83e6583.png",
      ),
      "figma:asset/384b4dceed8e0db577a15d3ded340dbdb122bd90.png": path.resolve(
        __dirname,
        "./src/assets/384b4dceed8e0db577a15d3ded340dbdb122bd90.png",
      ),
      "figma:asset/147ae3818526359e2f2c0cea9237de3c0e0b2a05.png": path.resolve(
        __dirname,
        "./src/assets/147ae3818526359e2f2c0cea9237de3c0e0b2a05.png",
      ),
      "figma:asset/0ed43e4dd98e3ba524b6c6ae77c0d233aa069a58.png": path.resolve(
        __dirname,
        "./src/assets/0ed43e4dd98e3ba524b6c6ae77c0d233aa069a58.png",
      ),
      "figma:asset/0813bebd73e8d1c277a7a25f62f81f8dafbdd6a9.png": path.resolve(
        __dirname,
        "./src/assets/0813bebd73e8d1c277a7a25f62f81f8dafbdd6a9.png",
      ),
      "figma:asset/prodhack_main_1080.mp4": path.resolve(
        __dirname,
        "./src/assets/prodhack_main_1080.mp4",
      ),
      "embla-carousel-react@8.6.0": "embla-carousel-react",
      "cmdk@1.1.1": "cmdk",
      "class-variance-authority@0.7.1": "class-variance-authority",
      "@radix-ui/react-tooltip@1.1.8": "@radix-ui/react-tooltip",
      "@radix-ui/react-toggle@1.1.2": "@radix-ui/react-toggle",
      "@radix-ui/react-toggle-group@1.1.2": "@radix-ui/react-toggle-group",
      "@radix-ui/react-tabs@1.1.3": "@radix-ui/react-tabs",
      "@radix-ui/react-switch@1.1.3": "@radix-ui/react-switch",
      "@radix-ui/react-slot@1.1.2": "@radix-ui/react-slot",
      "@radix-ui/react-slider@1.2.3": "@radix-ui/react-slider",
      "@radix-ui/react-separator@1.1.2": "@radix-ui/react-separator",
      "@radix-ui/react-select@2.1.6": "@radix-ui/react-select",
      "@radix-ui/react-scroll-area@1.2.3": "@radix-ui/react-scroll-area",
      "@radix-ui/react-radio-group@1.2.3": "@radix-ui/react-radio-group",
      "@radix-ui/react-progress@1.1.2": "@radix-ui/react-progress",
      "@radix-ui/react-popover@1.1.6": "@radix-ui/react-popover",
      "@radix-ui/react-navigation-menu@1.2.5":
        "@radix-ui/react-navigation-menu",
      "@radix-ui/react-menubar@1.1.6": "@radix-ui/react-menubar",
      "@radix-ui/react-label@2.1.2": "@radix-ui/react-label",
      "@radix-ui/react-hover-card@1.1.6": "@radix-ui/react-hover-card",
      "@radix-ui/react-dropdown-menu@2.1.6": "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-dialog@1.1.6": "@radix-ui/react-dialog",
      "@radix-ui/react-context-menu@2.2.6": "@radix-ui/react-context-menu",
      "@radix-ui/react-collapsible@1.1.3": "@radix-ui/react-collapsible",
      "@radix-ui/react-checkbox@1.1.4": "@radix-ui/react-checkbox",
      "@radix-ui/react-avatar@1.1.3": "@radix-ui/react-avatar",
      "@radix-ui/react-aspect-ratio@1.1.2": "@radix-ui/react-aspect-ratio",
      "@radix-ui/react-alert-dialog@1.1.6": "@radix-ui/react-alert-dialog",
      "@radix-ui/react-accordion@1.2.3": "@radix-ui/react-accordion",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    outDir: "dist",
  },
  server: {
    port: 3000,
    open: true,
  },
});
