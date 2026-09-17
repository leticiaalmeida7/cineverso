import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { PanelTopDashed } from "lucide-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});