/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';
const repoName = 'Gangadhar_portfolio_web'; // REPLACE with your GitHub repo name

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repoName}` : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

