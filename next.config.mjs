/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    reactStrictMode:true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    async rewrites() {
        return [
            {
                source: '/support',
                destination: '/terms-of-service',
            },
            {
                source: '/cancellation',
                destination: '/terms-of-service',
            },
        ];
    }
};

export default nextConfig;
