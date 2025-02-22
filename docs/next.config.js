import nextra from "nextra"

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  codeHighlight: true,
})

export default withNextra({
  redirects: () => {
    return [
      {
        source: "/security.txt",
        destination: "/.well-known/security.txt",
        permanent: true,
      },
      {
        source: "/new/provider-issue",
        destination:
          "https://github.com/nextauthjs/next-auth/issues/new?assignees=&labels=triage%2Cproviders&template=2_bug_provider.yml",
        permanent: true,
      },
      {
        source: "/new/github-discussions",
        destination:
          "https://github.com/nextauthjs/next-auth/discussions/categories/questions",
        permanent: true,
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "sveltekit.authjs.dev" }],
        destination: "https://authjs.dev/reference/sveltekit",
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "solid-start.authjs.dev" }],
        destination: "https://authjs.dev/reference/solid-start",
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "express.authjs.dev" }],
        destination: "https://authjs.dev/reference/express",
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "nextjs.authjs.dev" }],
        destination: "https://authjs.dev/reference/nextjs",
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "qwik.authjs.dev" }],
        destination: "https://authjs.dev/reference/qwik",
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "cli.authjs.dev" }],
        destination: "https://github.com/nextauthjs/cli",
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "errors.authjs.dev" }],
        destination: "https://authjs.dev/reference/core/errors/:path*",
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "warnings.authjs.dev" }],
        destination: "https://authjs.dev/reference/warnings/:path*",
      },
      {
        source: "/",
        has: [{ type: "host", value: "adapters.authjs.dev" }],
        destination: "https://authjs.dev/getting-started/database",
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "adapters.authjs.dev" }],
        destination: "https://authjs.dev/reference/adapter/:path*",
      },
      {
        source: "/",
        has: [{ type: "host", value: "providers.authjs.dev" }],
        destination: "https://authjs.dev/getting-started/authentication/oauth",
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "providers.authjs.dev" }],
        destination: "https://authjs.dev/getting-started/providers/:path",
      },
      {
        source: "/reference/core/providers_:slug(.*)",
        destination: "/reference/core/providers/:slug",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: "discord.authjs.dev" }],
        destination: "https://discord.gg/kuv7wXkHY4",
      },
      {
        source: "/reference/next-auth:path(.*)",
        destination: "/reference/nextjs:path(.*)",
      },
      {
        source: "/img/providers/:providerId*-dark.svg",
        destination: "/img/providers/:providerId*.svg",
      },
      {
        source: "/reference/adapter/:path(.*)",
        destination: "/getting-started/adapters/:path(.*)",
      },
      {
        source: "/getting-started/providers/email",
        destination: "/getting-started/providers/nodemailer",
      },
      {
        source: "/guides/basics/role-based-access-control",
        destination: "/guides/role-based-access-control",
      },
      {
        source: "/guides/basics/refresh-token-rotation",
        destination: "/guides/refresh-token-rotation",
      },
      {
        source: "/getting-started/providers",
        destination: "/getting-started/authentication/oauth",
      },
      {
        source: "/getting-started/providers/oauth-tutorial",
        destination: "/getting-started/authentication/oauth",
      },
      {
        source: "/getting-started/providers/email-tutorial",
        destination: "/getting-started/authentication/email",
      },
      {
        source: "/getting-started/providers/credentials-tutorial",
        destination: "/getting-started/providers/credentials",
      },
      {
        source: "/guides/providers/email-http",
        destination: "/guides/configuring-http-email",
      },
      {
        source: "/guides/upgrade-to-v5",
        destination: "/getting-started/migrating-to-v5",
      },
      {
        source: "/guides",
        destination: "/guides/debugging",
      },
    ]
  },
})
