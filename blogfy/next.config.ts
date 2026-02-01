import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.stj.jus.br', // Domínio das imagens do RSS do STJ
            },
            {
                protocol: 'https',
                hostname: 'www.stj.jus.br', // Fallback comum para o STJ
            },
        ],
    },
};

export default nextConfig;