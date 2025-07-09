// copaelot/coapelot-web/Copaelot-coapelot-web-960840ec51bfa874628270fea1e1f27b42586f23/next.config.ts

import type { Config } from "tailwindcss";

const nextConfig = {
  images: {
    domains: [
      "placehold.co", // <--- Asegúrate de que este dominio esté aquí
      "i.imgur.com"   // Este ya debe estar de la modificación anterior
    ],
  },
};

export default nextConfig; // Asegúrate de exportar nextConfig
