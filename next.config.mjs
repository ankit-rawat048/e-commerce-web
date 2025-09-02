/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // optional
  images: {
    unoptimized: true, // ✅ disable Image Optimization for static export
  },
};

export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   trailingSlash: true, // optional: adds trailing slashes to all routes, e.g. /about/
// };

// export default nextConfig;




// // /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// // export default nextConfig;
