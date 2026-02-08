// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
    markdown: {
        rehypePlugins: [
            [
                rehypeExternalLinks,
                {
                    target: "_blank",
                    rel: ["nofollow", "noopener", "noreferrer"],
                },
            ],
        ],
    },
    integrations: [
        starlight({
            title: "hardware!",
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
                    label: "Design tips",
                    autogenerate: { directory: "design" },
                },
                {
                    label: "Assembly/Building",
                    autogenerate: { directory: "building" },
                },
                {
                    label: "Shipping",
                    autogenerate: { directory: "shipping" },
                },
                {
                    label: "Other",
                    autogenerate: { directory: "other" },
                },
                {
                    label: "Project Blogs",
                    // badge: { text: "Live", variant: "note" },
                    // collapsed: true,
                    // Each item here is one entry in the navigation menu.
                    autogenerate: { directory: "project-blogs" },
                },
                {
                    label: "User Guides",
                    badge: { text: "Untested", variant: "caution" },
                    collapsed: true,
                    // Each item here is one entry in the navigation menu.
                    autogenerate: { directory: "user-contrib-guides" },
                },
                {
                    label: "Program Archives",
                    badge: { text: "Legacy", variant: "caution" },
                    collapsed: true,
                    // Each item here is one entry in the navigation menu.
                    autogenerate: { directory: "program-archive" },
                },
            ],
            customCss: ["./src/styles/global.css"],
            favicon: "/icon-blue-purple.png",
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
