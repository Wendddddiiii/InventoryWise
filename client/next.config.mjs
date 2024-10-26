/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol:"https",
                hostname:"https://s3-inventorywise.s3.ap-southeast-2.amazonaws.com",
                port: "",
                pathname:"/**",
            },
        ],
    },
};

export default nextConfig;
