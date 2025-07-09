/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['images.unsplash.com', 'ik.imagekit.io'] // configuring strange tools which we`re using
    }
};

export default nextConfig;
