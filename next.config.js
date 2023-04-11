/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/api/todos',
        headers: [
          { key: "Access-Control-Allow-Headers", value: "openai-ephemeral-user-id, openai-conversation-id, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          { key: "Access-Control-Allow-Origin", value: "*" }
        ],
      },
      {
        source: '/api/create-todo',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: "*" }
        ],
      },
    ];
  },
}

module.exports = nextConfig
