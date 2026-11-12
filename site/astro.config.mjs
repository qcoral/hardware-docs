import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
    redirects: {
        "/shipping/journaling/": "/journaling/",
        "/shipping/example-journal/": "/journaling/example-journal/",
    },
    markdown: {
        processor: unified({
            rehypePlugins: [
                [
                    rehypeExternalLinks,
                    {
                        target: "_blank",
                        rel: ["nofollow", "noopener", "noreferrer"],
                    },
                ],
            ],
        }),
    },
    integrations: [
        starlight({
            title: "Hardware Codex",
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/qcoral/hardware-docs",
                },
                {
                    icon: "slack",
                    label: "Slack",
                    href: "https://hackclub.com/slack/",
                },
                {
                    icon: "twitter",
                    label: "Twitter",
                    href: "https://twitter.com/qcoral_",
                },
            ],
            sidebar: [
                // {
                //     label: "Preface",
                //     autogenerate: { directory: "overview" },
                // },
                {
                    label: "Overview",
                    link: "/",
                },
                {
                    label: "Design resources",
                    items: [{ autogenerate: { directory: "design" } }],
                },
                {
                    label: "Journaling",
                    items: [{ autogenerate: { directory: "journaling" } }],
                },
                {
                    label: "Assembly/Building",
                    items: [{ autogenerate: { directory: "building" } }],
                },
                {
                    label: "Shipping",
                    items: [{ autogenerate: { directory: "shipping" } }],
                },
                {
                    label: "Other",
                    items: [{ autogenerate: { directory: "other" } }],
                },
                {
                    label: "Contributed Guides",
                    collapsed: true,
                    items: [{ autogenerate: { directory: "user-contrib-guides" } }],
                },
                {
                    label: "Project Blogs",
                    items: [{ autogenerate: { directory: "project-blogs" } }],
                },
                {
                    label: "Program Archives",
                    badge: { text: "Legacy", variant: "caution" },
                    collapsed: true,
                    items: [{ autogenerate: { directory: "archive/highway" } }],
                },
            ],
            routeMiddleware: "./src/routeData.ts",
            components: {
                Head: "./src/components/Head.astro",
            },
            customCss: [
                "@fontsource/dm-sans/400.css",
                "@fontsource/dm-sans/600.css",
                "./src/styles/global.css",
            ],
            favicon: "/icon-green-wood.png",
            head: [
                {
                    tag: "script",
                    attrs: {
                        async: true,
                        src: "https://plausible.io/js/pa-_MbWFkTJ9I6nJ4sBKVTcX.js",
                    },
                },
                {
                    tag: "script",
                    content: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`,
                },
            ],
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
