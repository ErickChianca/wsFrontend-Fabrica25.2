import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'raw.githubusercontent.com',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'],
  },
};

export default nextConfig;